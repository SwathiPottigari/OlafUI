import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../../ChefCreateItem/ChefCreateItem";
import API from "../../utils/API";
import NavBar from "../../NavBar/NavBar";
import ItemCard from '../../ItemCard/ItemCard';
import Container from '../../Container/Container';
import Row from '../../Row/Row';
import Col from '../../Col/Col';
import "./Chef.css"


export default class Chef extends Component {

    state = {
        items: [],
        dish: "",
        quantity: "",
        servingSize: "",
        price: "",
        ingredients: "",
        cuisine: ""
    };

    // componentDidMount() {
    //     this.menuItems();
    // }

    // menuItems = () => {
    //     API.menuItems()
    //         .then(res =>
    //             this.setState({ items: res.data,
    //                 dish: "",
    //                 quantity: "",
    //                 servingSize: "",
    //                 price: "",
    //                 ingredients: "",
    //                 cuisine: ""
    //             })
    //         )
    //         .catch(err => console.log(err));
    // };

    // removeDish = id => {
    //     API.removeDish(id)
    //         .then(res => this.menuItems())
    //         .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.dish 
    //         && this.state.price 
    //         && this.state.quantity
    //         && this.state.ingredients) {
    //         API.saveDish({
    //             dish: this.state.dish,
    //             quantity: this.state.quantity,
    //             servingSize: this.state.servingSize,
    //             price: this.state.price,
    //             ingredients: this.state.ingredients,
    //             cuisine: this.state.cuisine
    //         })
    //             .then(res => this.menuItems())
    //             .catch(err => console.log(err));
    //     }
    // };

    render() {
        return (
            <div className="chef-dash">
                <NavBar />
                <Container fluid>
                    <Row>
                        <Col size="md-6">
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
                            <ItemCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
