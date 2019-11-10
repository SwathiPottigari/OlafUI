import React, { Component } from 'react'
import { Input, TextArea, FormBtn } from "../../ChefCreateItem/ChefCreateItem";
import API from "../../utils/API";
import ChefNavBar from "../../ChefNavBar/ChefNavBar";
import ChefItemCard from '../../ChefItemCard/ChefItemCard';
import Container from '../../Container/Container';
import Row from '../../Row/Row';
import Col from '../../Col/Col';
import "./Chef.css"
import Jumbotron from '../../Jumbotron/Jumbotron';
import axios from 'axios';
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import cloudinary from 'cloudinary-react'

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
        description: '',
        uploadImage: false,
        imageURL: '',
    };

    removeDish = (id) => {
        let setVariable = this;
        axios.delete(this.state.url + "/api/removeDish/" + id).then(function (results) {
            setVariable.setState({ redirect: true });
            setVariable.readSessions();
        }).catch(function (error) {
            console.log(error);
        });
    };

    componentDidMount() {
        this.readSessions();
    }

    readSessions = () => {
        axios.get(`${this.state.url}/api/readsessions`, { withCredentials: true }).then(res => {
            this.setState({ loggedInUser: res.data.user });
            let variable = this;
            axios.get(this.state.url + '/api/menuList/' + this.state.loggedInUser.id)
                .then(function (results) {
                    variable.setState({ items: results.data });
                }).catch(function (error) {
                    console.log(error);
                });
        })
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let sessionVariable = this;
        this.setState({ uploadImage: false })
        this.setState({ dish: '', quantity: '', servingUnit: '', price: '', ingredients: '', cuisine: '', description: '' })
        axios.post(this.state.url + "/api/createMenu", {
            dish: this.state.dish,
            quantity: this.state.quantity,
            servingUnit: this.state.servingUnit,
            price: this.state.price,
            ingredients: this.state.ingredients,
            cuisine: this.state.cuisine,
            ChefId: this.state.loggedInUser.id,
            description: this.state.description,
            imageURL: this.state.imageURL
        })
            .then(function (results) {
                sessionVariable.readSessions();
            }).catch(function (error) {
                console.log(error);
            });

    };

    openWidget = event => {
        event.preventDefault();
        const myWidget = window.cloudinary.createUploadWidget({
            cloudName: "dcokaa0ia",
            uploadPreset: 'olafgo'
        }, (error, result) => {
            if (result.event === "success") {
                this.setState({
                    uploadImage: true,
                    imageURL: result.info.url
                })

            }
        });
        myWidget.open();

    }

    toggleSwitch = () => {
        if (this.state.loggedInUser.id) {

            return <ToggleSwitch chefId={this.state.loggedInUser.id}><h3>Current Menu</h3></ToggleSwitch>
        }
    }

    chefNavbar = () => {
        if (this.state.loggedInUser.id) {
            return <ChefNavBar userId={this.state.loggedInUser.id} user="chef" />
        }
    }

    render() {
        return (
            <div className="chef-dash">
                {this.chefNavbar()}
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <div id="chef-form">

                                <Jumbotron><h3>Create Menu Item</h3></Jumbotron>
                                <form className="create-form">
                                    <Input
                                        value={this.state.dish}
                                        onChange={this.handleInputChange}
                                        name="dish"
                                        placeholder="Dish name"
                                    />
                                    <div className="form-row mb-4">
                                        <div className="col">
                                            <select name="cuisine" type="text" className="form-control" placeholder="Cuisine" onChange={this.handleInputChange} value={this.state.cuisine}>
                                                <option defaultValue>Cuisine Type</option>
                                                <option value="African">African</option>
                                                <option value="American">American</option>
                                                <option value="Arab">Arab</option>
                                                <option value="Asian">Asian</option>
                                                <option value="Baked Goods">Baked Goods</option>
                                                <option value="Bangladeshi">Bangladeshi</option>
                                                <option value="Bengali">Bengali</option>
                                                <option value="Beverage">Beverage</option>
                                                <option value="Brazilian">Brazilian</option>
                                                <option value="Buddhist">Buddhist</option>
                                                <option value="Cajun">Cajun</option>
                                                <option value="Cantonese">Cantonese</option>
                                                <option value="Caribbean">Caribbean</option>
                                                <option value="Central African">Central African</option>
                                                <option value="Chechen">Chechen</option>
                                                <option value="Chinese">Chinese</option>
                                                <option value="Chinese Islam">Chinese Islam</option>
                                                <option value="Danish">Danish</option>
                                                <option value="Dessert">Dessert</option>
                                                <option value="European">European</option>
                                                <option value="East African">East African</option>
                                                <option value="Eastern European">Eastern European</option>
                                                <option value="French">French</option>
                                                <option value="Filipino">Filipino</option>
                                                <option value="German">German</option>
                                                <option value="Greek">Greek</option>
                                                <option value="Gujarati">Gujarati</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                                <option value="Indian">Indian</option>
                                                <option value="Indonesian">Indonesian</option>
                                                <option value="Italian">Italian</option>
                                                <option value="Jamaican">Jamaican</option>
                                                <option value="Japanese">Japanese</option>
                                                <option value="Jewish">Jewish</option>
                                                <option value="Korean">Korean</option>
                                                <option value="Laotian">Laotian</option>
                                                <option value="Lebanese">Lebanese</option>
                                                <option value="Malay">Malay</option>
                                                <option value="Mediterranean">Mediterranean</option>
                                                <option value="Mexican">Mexican</option>
                                                <option value="Moroccan">Moroccan</option>
                                                <option value="Native American">Native American</option>
                                                <option value="Nepalese">Nepalese</option>
                                                <option value="Northern European">Northern European</option>
                                                <option value="Polish">Polish</option>
                                                <option value="Pakistani">Pakistani</option>
                                                <option value="Persian">Persian</option>
                                                <option value="Peruvian">Peruvian</option>
                                                <option value="Portugese">Portugese</option>
                                                <option value="Punjabi">Punjabi</option>
                                                <option value="Rajasthani">Rajasthani</option>
                                                <option value="Russian">Russian</option>
                                                <option value="South Indian">South Indian</option>
                                                <option value="Southern African">Southern African</option>
                                                <option value="SouthEast Asian">SouthEast Asian</option>
                                                <option value="Sri Lankan">Sri Lankan</option>
                                                <option value="Taiwanese">Taiwanese</option>
                                                <option value="Thai">Thai</option>
                                                <option value="Turkish">Turkish</option>
                                                <option value="Tamil">Tamil</option>
                                                <option value="Vegan">Vegan</option>
                                                <option value="Vegetarian">Vegetarian</option>
                                                <option value="Vietnamese">Vietnamese</option>
                                                <option value="West African">West African</option>
                                            </select>
                                        </div>
                                    </div>

                                    <Input
                                        type="number" min="0.00" max="1000.00" step="0.01"
                                        value={this.state.price}
                                        onChange={this.handleInputChange}
                                        name="price"
                                        placeholder="Price"
                                        required
                                    />
                                    <div className="form-row mb-4">
                                        <div className="col">
                                            <select name="quantity" type="text" className="form-control" placeholder="Quantity" onChange={this.handleInputChange} value={this.state.quantity}>
                                                <option defaultValue>Quantity</option>
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
                                                <option value="Servings">Servings</option>
                                                <option value="Pieces">Pieces</option>
                                            </select>

                                        </div>
                                    </div>
                                    <TextArea
                                        value={this.state.ingredients}
                                        onChange={this.handleInputChange}
                                        name="ingredients"
                                        placeholder="Ingredients (required)"
                                        required
                                    />
                                    <TextArea
                                        value={this.state.description}
                                        onChange={this.handleInputChange}
                                        name="description"
                                        placeholder="Dish Description (optional)"
                                    />
                                    <button onClick={this.openWidget} type="button" className="btn btn-primary">{this.state.uploadImage ? <span>Success<i class="fas fa-check-circle fa-lg ml-2"></i></span> : "Upload Image"}</button>
                                    <FormBtn
                                        disabled={!(this.state.dish
                                            && this.state.price
                                            && this.state.quantity
                                            && this.state.ingredients)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit
                                </FormBtn>
                                </form>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div>
                                <Jumbotron><h3>Your Current Menu</h3></Jumbotron>
                            </div>
                            <div className="text-left toggle">{this.toggleSwitch()}</div>
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
                                quantity={element.quantity}
                                imageURL={element.imageURL}
                                uploadImage={element.uploadImage}
                                removeDish={this.removeDish}
                            />)}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
