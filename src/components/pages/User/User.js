import React, { Component } from 'react';
import NavBar from "../../NavBar/NavBar";
import Map from "../../Map/Map"
/* import ChefItemCard from '../../ChefItemCard/ChefItemCard'; */
import Container from '../../Container/Container';
import "./User.css";
import axios from 'axios';
import ItemCard from "../../ItemCard/ItemCard";


export default class User extends Component {

    state = {
        url: "https://olafapi.herokuapp.com",
        loggedInUser:null,
        currentCustomer:null,
        userCart:null
    }

    setUserCart=(val)=>{
        this.setState({
            userCart:val
        })
    }


    componentDidMount(){
        this.readSessions();
    }


    readSessions = () => {
        axios.get(`${this.state.url}/api/readsessions`, { withCredentials: true }).then(res => {
            this.setState({ loggedInUser: res.data.user });
            // console.log("check",this.state.loggedInUser)
            let variable = this;
            axios.get(this.state.url + '/api/customer/' + this.state.loggedInUser.id)
                .then(function (results) {
                    variable.setState({ currentCustomer: results.data[0] });
                }).catch(function (error) {
                    console.log(error);
                });
        })
    }

    render() {
        console.log("shopping cart ", this.state.userCart)
        return (
            <div className="user-dash">
                <NavBar  currentCustomer = {this.state.currentCustomer}/>
                <Container fluid>
                   <Map currentCustomer = {this.state.currentCustomer}  setShoppingCart= {this.setUserCart} />
                {/* <ChefItemCard /> */}
                </Container>
            </div>
        )

    }
    
}