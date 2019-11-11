import React, { Component } from 'react';
import CartNavBar from "../../CartNavBar/CartNavBar";
import Container from '../../Container/Container';
import "./ShoppingCart.css";
import axios from 'axios';
import ShoppingCartItem from '../../ShoppingCartItem/ShoppingCartItem';
import Row from '../../Row/Row';
import OrderItemModal from '../../OrderItemModal/OrderItemModal';

export default class ShoppingCart extends Component {

    state = {
        url: "http://localhost:8080",
        loggedInUser: '',
        cartItems: [],
        totalCost:null
    }

    submitOrder = () => {
        let setVariable=this;
        try {
            return axios.post(`http://localhost:8080/api/order`, {

               data:{
                   cartItems:this.state.cartItems,
                   totalCost:this.state.totalCost
                }
            }).then(function(results){
                setVariable.setState({
                    cartItems:[]
                })
                localStorage.clear();
            }).catch();

        } catch (error) {
            console.error(error)
        }
    }

    

    calcTotalCost = (val)=>{
        console.log("val", val)
        let newArray = val.map((item)=>{
            return parseFloat(item.price) * parseInt(item.orderedQuantity)
            
        })
        console.log(newArray)
        const arrSum = (newArray)  => newArray.reduce((a,b) => a + b, 0)
       
        let cost = arrSum(newArray)
        console.log("cost",cost)
        // arrSum([20, 10, 5, 10]) -> 45 */
        this.setState({
            totalCost:cost
        })

    } 

    componentDidMount() {
        this.readSessions();
        if (localStorage.getItem("Cart") === null) {
            this.setState({
                cartItems: []
            })
        } else {
            this.setState({
                cartItems: JSON.parse(localStorage.getItem("Cart"))
            }
            )
        }
    }

    componentDidUpdate(prevProps,prevState) {
        if (this.state.cartItems !== prevState.cartItems){
            this.calcTotalCost(this.state.cartItems)
        }
    }


    readSessions = () => {
        let setVariable = this;
        axios.get(`${this.state.url}/api/readsessions`, { withCredentials: true }).then(res => {
            setVariable.setState({ loggedInUser: res.data.user });
        }).catch(function (error) { console.log(error) })
    }

    cartNavbar = () => {
        if (this.state.loggedInUser.id) {
            return <CartNavBar userId={this.state.loggedInUser.id} user="customer" />
        }
    }

    render() {
        console.log("items in cart", this.state.cartItems)
        console.log("total cost",this.state.totalCost)
        return (
            <div className="user-dash">
                {this.cartNavbar()}
                <Container fluid>
                    <Row>
                        <div className='container'>
                            <div className='window'>
                                <div className='order-info'>
                                    <div className='order-info-content'>
                                        <h2>Order Summary</h2>
                                        <div class='line'></div>
                                        {this.state.cartItems.map(element => <ShoppingCartItem price={element.price} img={element.img} dish={element.dish} orderedQuantity={element.orderedQuantity}/>)}
                                        <div class='total'>
                                            <p class="mr-4">TOTAL</p>
                                            <p>${this.state.totalCost}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='total-info'>
                                    <div class='total-info-content'>
                                        <h2 className="total-title">Olaf<i class="fas fa-carrot"></i></h2>
                                        <div className="total-container">
                                            <h3>ORDER TOTAL:</h3>
                                            <h3>${this.state.totalCost}</h3>
                                        </div>
                                        <button onClick={this.submitOrder} className='pay-btn' data-toggle="modal" data-target="#orderItemModal">Checkout</button>

                                    </div>

                                </div>
                            </div>
                        </div>



                    </Row>
                </Container>
                <OrderItemModal />
            </div>
        )
    }
}