import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../../ChefCreateItem/ChefCreateItem";
import NavBar from "../../NavBar/NavBar";
import ItemCard from '../../ItemCard/ItemCard';
import Container from '../../Container/Container';
import Row from '../../Row/Row';
import Col from '../../Col/Col';
import "./Chef.css"


export default class Chef extends Component {

    state = {
        recipes: [],
        dish: "",
        quantity: "",
        servingSize: "",
        price: "",
        ingredients: "",
        cuisine: ""
    };

    // componentDidMount() {
    //     this.loadRecipes();
    // }

    // loadRecipes = () => {
    //     API.getRecipes()
    //         .then(res =>
    //             this.setState({ recipes: res.data,
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

    // deleteDish = id => {
    //     API.deleteDish(id)
    //         .then(res => this.loadRecipes())
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
    //     if (this.state.title && this.state.author) {
    //         API.saveDish({
    //             title: this.state.title,
    //             author: this.state.author,
    //             synopsis: this.state.synopsis
    //         })
    //             .then(res => this.loadRecipes())
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
                                    placeholder="Cuisine (required)"
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
                                    disabled={!(this.state.author && this.state.title)}
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
