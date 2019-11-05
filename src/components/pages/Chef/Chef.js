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
import ButtonJumbotron from "../../ButtonJumbotron/ButtonJumbotron";

// import Cloudinary from '../../Cloudinary/Cloudinary';

export default class Chef extends Component {

    state = {
        items: [],
        dish: "",
        quantity: "",
        servingUnit: "",
        price: "",
        ingredients: "",
        cuisine: "",
        url: "http://localhost:8080",
        loggedInUser: '',
        description: ''
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
        let sessionVariable = this;
        axios.post(this.state.url + "/api/createMenu", {
            dish: this.state.dish,
            quantity: this.state.quantity,
            servingUnit: this.state.servingUnit,
            price: this.state.price,
            ingredients: this.state.ingredients,
            cuisine: this.state.cuisine,
            ChefId: this.state.loggedInUser.id,
            description: this.state.description
        }).then(function (results) {
            sessionVariable.readSessions();
        }).catch(function (error) {
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
                                    placeholder="Dish Name (required)"
                                />
                                <Input
                                    value={this.state.cuisine}
                                    onChange={this.handleInputChange}
                                    type="text"
                                    list="cuisine"
                                    placeholder="Cuisine Type (optional)"
                                />
                                <datalist
                                    value={this.state.cuisine}
                                    onChange={this.handleInputChange}
                                    name="cuisine"
                                    id="cuisine">
                                    <option value="African"></option>
                                    <option value="American"></option>
                                    <option value="Arab"></option>
                                    <option value="Asian"></option>
                                    <option value="Baked Goods"></option>
                                    <option value="Bangladeshi"></option>
                                    <option value="Bengali"></option>
                                    <option value="Beverage"></option>
                                    <option value="Brazilian"></option>
                                    <option value="Buddhist"></option>
                                    <option value="Cajun"></option>
                                    <option value="Cantonese"></option>
                                    <option value="Caribbean"></option>
                                    <option value="Central African"></option>
                                    <option value="Chechen"></option>
                                    <option value="Chinese"></option>
                                    <option value="Chinese Islam"></option>
                                    <option value="Danish"></option>
                                    <option value="Dessert"></option>
                                    <option value="European"></option>
                                    <option value="East African"></option>
                                    <option value="Eastern European"></option>
                                    <option value="French"></option>
                                    <option value="Filipino"></option>
                                    <option value="German"></option>
                                    <option value="Greek"></option>
                                    <option value="Gujarati"></option>
                                    <option value="Hong Kong"></option>
                                    <option value="Hyderabad"></option>
                                    <option value="Indian"></option>
                                    <option value="Indonesian"></option>
                                    <option value="Italian"></option>
                                    <option value="Jamaican"></option>
                                    <option value="Japanese"></option>
                                    <option value="Jewish"></option>
                                    <option value="Korean"></option>
                                    <option value="Laotian"></option>
                                    <option value="Lebanese"></option>
                                    <option value="Malay"></option>
                                    <option value="Mediterranean"></option>
                                    <option value="Mexican"></option>
                                    <option value="Mediterranean"></option>
                                    <option value="Moroccan"></option>
                                    <option value="Native American"></option>
                                    <option value="Nepalese"></option>
                                    <option value="Northern European"></option>
                                    <option value="Polish"></option>
                                    <option value="Pakistani"></option>
                                    <option value="Persian"></option>
                                    <option value="Peruvian"></option>
                                    <option value="Portugese"></option>
                                    <option value="Punjabi"></option>
                                    <option value="Rajasthani"></option>
                                    <option value="Russian"></option>
                                    <option value="South Indian"></option>
                                    <option value="Southern African"></option>
                                    <option value="SouthEast Asian"></option>
                                    <option value="Sri Lankan"></option>
                                    <option value="Taiwanese"></option>
                                    <option value="Thai"></option>
                                    <option value="Turkish"></option>
                                    <option value="Tamil"></option>
                                    <option value="Vegan"></option>
                                    <option value="Vegetarian"></option>
                                    <option value="Vietnamese"></option>
                                    <option value="West African"></option>
                                </datalist>

                                <Input
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                    name="price"
                                    placeholder="Price (required)"
                                />
                                <div className="form-row mb-4">
                                    <div className="col">
                                        <select name="quantity" type="text" className="form-control" placeholder="Quantity" onChange={this.handleInputChange} value={this.state.quantity}>
                                            <option defaultValue>Amount</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select name="servingUnit" onChange={this.handleInputChange} value={this.state.servingUnit} className="form-control browser-default custom-select">
                                            <option defaultValue>Unit Type</option>
                                            <option value="servings">Servings</option>
                                            <option value="pieces">Pieces</option>
                                        </select>

                                    </div>
                                </div>
                                <TextArea
                                    value={this.state.ingredients}
                                    onChange={this.handleInputChange}
                                    name="ingredients"
                                    placeholder="Ingredients (required)"
                                />
                                <TextArea
                                    value={this.state.ingredients}
                                    onChange={this.handleInputChange}
                                    name="description"
                                    placeholder="Dish Description (optional)"
                                />
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
                            <ButtonJumbotron><h3>Current Menu</h3></ButtonJumbotron>

                            {this.state.items.map(element => <ChefItemCard
                                id={element.id}
                                ingredients={element.ingredients}
                                price={element.price}
                                servingUnit={element.servingUnit}
                                dish={element.dish}
                                ChefId={element.ChefId}
                                cuisine={element.cuisine}
                                key={element.id}
                                description={element.description}
                            />)}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
