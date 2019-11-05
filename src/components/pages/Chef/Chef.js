import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../../ChefCreateItem/ChefCreateItem";
import API from "../../utils/API";
import NavBar from "../../NavBar/NavBar";
import ChefItemCard from '../../ChefItemCard/ChefItemCard';
import Container from '../../Container/Container';
import Row from '../../Row/Row';
import Col from '../../Col/Col';
import "./Chef.css"
import Jumbotron from '../../Jumbotron/Jumbotron';
import axios from 'axios';

// import Cloudinary from '../../Cloudinary/Cloudinary';

export default class Chef extends Component {

    state = {
        items: [],
        dish: "",
        quantity: "",
        servingSize: "",
        price: "",
        ingredients: "",
        cuisine: "",
        url: "http://localhost:8080",
        loggedInUser: ''
    };

    componentDidMount() {
        this.readSessions();
    }

    readSessions = () => {
        axios.get(`${this.state.url}/api/readsessions`, { withCredentials: true }).then(res => {
            this.setState({ loggedInUser: res.data.user });
            console.log(this.state.loggedInUser)
            let variable = this;
            axios.get(this.state.url + '/api/menuList/' + this.state.loggedInUser.id)
                .then(function (results) {
                    variable.setState({ items: results.data });
                }).catch(function (error) {
                    console.log(error);
                });
        })
    }

    removeDish = id => {
        API.removeDish(id)
            .then(res => this.menuItems())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let sessionVariable=this;
        axios.post(this.state.url+"/api/createMenu",{
            dish: this.state.dish,
            quantity: this.state.quantity,
            servingSize: this.state.servingSize,
            price: this.state.price,
            ingredients: this.state.ingredients,
            cuisine: this.state.cuisine,
            ChefId:this.state.loggedInUser.id
        }).then(function(results){
            sessionVariable.readSessions();
        }).catch(function(error){
            console.log(error);
        });
        
    };

    render() {
        return (
            <div className="chef-dash">
                <NavBar />
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <Jumbotron><h3>Menu Creator</h3></Jumbotron>
                            <form>
                                <Input
                                    value={this.state.dish}
                                    onChange={this.handleInputChange}
                                    name="dish"
                                    placeholder="Name (required)"
                                />
                                <Input
                                    value={this.state.cuisine}
                                    onChange={this.handleInputChange}
                                    name="cuisine"
                                    placeholder="Cuisine (optional)"
                                />
                                <Input
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                    name="price"
                                    placeholder="Price (required)"
                                />
                                <Input
                                    value={this.state.servingSize}
                                    onChange={this.handleInputChange}
                                    name="servingSize"
                                    placeholder="Serving Size (optional)"
                                />
                                <Input
                                    value={this.state.quantity}
                                    onChange={this.handleInputChange}
                                    name="quantity"
                                    placeholder="Quantity (required)"
                                />
                                <TextArea
                                    value={this.state.ingredients}
                                    onChange={this.handleInputChange}
                                    name="ingredients"
                                    placeholder="Ingredients (required)"
                                />
                                <label>Upload an image</label>
                                <input type="file" />
                                <FormBtn
                                    disabled={!(this.state.dish
                                        && this.state.price
                                        && this.state.quantity
                                        && this.state.ingredients)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit Dish
                                </FormBtn>
                            </form>
                        </Col>
                        <Col size="md-6">
                            <Jumbotron><h3>Current Menu</h3></Jumbotron>
                            {this.state.items.map(element => <ChefItemCard
                                id={element.id}
                                ingredients={element.ingredients}
                                price={element.price}
                                servingSize={element.servingSize}
                                dish={element.dish}
                                ChefId={element.ChefId}
                                cuisine={element.cuisine}
                                key={element.id}
                            />)}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
