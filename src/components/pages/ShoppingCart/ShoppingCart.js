import React, { Component } from 'react';
import CartNavBar from "../../CartNavBar/CartNavBar";
import Container from '../../Container/Container';
import "./ShoppingCart.css";
import axios from 'axios';
import ShoppingCartItem from '../../ShoppingCartItem/ShoppingCartItem';
import Row from '../../Row/Row';
import OrderItemModal from '../../OrderItemModal/OrderItemModal';

export default class User extends Component {

    state = {
        url: "http://localhost:8080",
        loggedInUser: '',
        cartItems: []
    }

    submitOrder = () => {
        try {
            return axios.post(`http://localhost:8080/api/order`, {
                orderedQuantity: this.state.customerQty,
                CustomerId: this.props.currentCustomer.id,
                MenuId: this.props.currentMenu.id,
                ChefId: this.props.currentChef.id
            })
        } catch (error) {
            console.error(error)
        }
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
            })

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
                                        {this.state.cartItems.map(element => <ShoppingCartItem price={element.price} img={element.img} dish={element.dish} orderQuantity={element.orderQuantity}/>)}
                                        <div class='total'>
                                            <p class="mr-4">TOTAL</p>
                                            <p>$435.55</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='total-info'>
                                    <div class='total-info-content'>
                                        <h2 className="total-title">Olaf<i class="fas fa-carrot"></i></h2>
                                        <div className="total-container">
                                            <h3>ORDER TOTAL:</h3>
                                            <h3>$5.99</h3>
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