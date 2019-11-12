import React, { Component } from 'react';
import UserNavBar from "../../UserNavBar/UserNavBar";
import Map from "../../Map/Map"
/* import ChefItemCard from '../../ChefItemCard/ChefItemCard'; */
import Container from '../../Container/Container';
import "./User.css";
import axios from 'axios';
import ItemCard from "../../ItemCard/ItemCard";
import AddItemModal from '../../AddItemModal/AddItemModal';


export default class User extends Component {

    state = {
        url: "http://localhost:8080",
        loggedInUser: '',
        currentCustomer: {},
        cartItems: [],
        numberOfItems: 0
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


    setCartNumber = (val) => {
        this.setState({
            numberOfItems: val
        })
    }

    readSessions = () => {
        let setVariable = this;
        axios.get(`${this.state.url}/api/readsessions`, { withCredentials: true }).then(res => {
            setVariable.setState({ loggedInUser: res.data.user });
            axios.get(this.state.url + "/api/user/" + this.state.loggedInUser.id + "/customer").then(
                function (results) {
                    setVariable.setState({
                        currentCustomer: results.data[0]
                    })

                })
        }).catch(function (error) { console.log(error) })
    }

    userNavbar = () => {
        if (this.state.loggedInUser.id) {
            return <UserNavBar userId={this.state.loggedInUser.id} user="customer" items={this.state.numberOfItems} />
        }
    }

    render() {
        // console.log("user cart ", this.state.userCart)
        return (
            <div className="user-dash">
                {this.userNavbar()}
                <Container fluid>
                    <Map currentCustomer={this.state.currentCustomer} setShoppingCart={this.props.storeContent} setCartNumber={this.setCartNumber}/>
                </Container>
                <AddItemModal />
            </div>
        )

    }

}