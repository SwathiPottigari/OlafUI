
import React, { Component } from 'react';
import "./ShoppingCartItem.css";
import "../OrderItemModal/OrderItemModal.js"
import axios from 'axios';

export default class ItemCard extends Component {

    state = {
        result: null,
        customerQty: null
    };

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        console.log("state of cutomer qty", this.state.customerQty)
        console.log("props in itemcard", this.props)
    }


    orderItem = () => {
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

    render() {
        return (

            <React.Fragment>

                <div className="col-xs-6 list-container">
                    <div className="list mb-2">
                        <div className="list-header">
                            <h5 className="card-header white-text text-left">
                                <span className="cuisine"><strong>Chinese</strong></span>
                            </h5>
                            <img className="item-image" alt="" />
                        </div>
                        <div className="list-content">
                            <h2>Fried Rice</h2>
                            <div className="container-fluid card-container">
                                <div className="row">
                                    <div className="col-xs-6 card-details">
                                        <p>Price: <span className="list-meta-details">$5.99</span></p>
                                    </div>
                                    <div className="col-xs-6 card-details">
                                        <p>Servings Available: <span className="list-meta-details">6</span></p>
                                    </div>
                                </div>
                            </div>
                            <p>Ingredients: <span className="list-meta">Rice, egg, chicken, carrots, peas, soy sauce, salt, pepper</span></p>
                            <p>Description: <span className="list-meta">Here is where the description of the food item goes</span></p>
                        </div>
                    </div>
                </div>
                {/* {this.renderRedirect()} */}
                {/* <OrderItemModal serving={this.state.servingAmount} item={this.state.item} total={this.state.price * this.state.servingAmount} /> */}
            </React.Fragment>
            
            
        )
    }
}
