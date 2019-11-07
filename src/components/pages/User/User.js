import React, { Component } from 'react';
import UserNavBar from "../../UserNavBar/UserNavBar";
import Map from "../../Map/Map"
/* import ChefItemCard from '../../ChefItemCard/ChefItemCard'; */
import Container from '../../Container/Container';
import "./User.css";
import axios from 'axios';
import ItemCard from "../../ItemCard/ItemCard";


export default class User extends Component {

    state = {
        url: "http://localhost:8080",
        loggedInUser:'',
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
        let setVariable=this;
        axios.get(`${this.state.url}/api/readsessions`, { withCredentials: true }).then(res => {
            setVariable.setState({ loggedInUser: res.data.user });
        }).catch(function(error){console.log(error)})
    }

    userNavbar=()=>{
        if(this.state.loggedInUser.id){
        return  <UserNavBar userId={this.state.loggedInUser.id} user="customer"/>
        }
    }

    render() {
        console.log("shopping cart ", this.state.userCart)
        return (
            <div className="user-dash">
               {this.userNavbar()}
                <Container fluid>
                   <Map currentCustomer = {this.state.loggedInUser}  setShoppingCart= {this.setUserCart} />
                </Container>
            </div>
        )

    }
    
}