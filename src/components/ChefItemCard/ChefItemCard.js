import React, { Component } from 'react';
import "./ChefItemCard.css";
import axios from "axios";

export default class ChefItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            servingAmount: "",
            price: "",
            item: "",
            isModalShown: false,
            url: "http://localhost:8080"
        }
    } 

    removeDish = id => {
        axios.delete("/api/removeDish/:dishId").then().catch();
        };

    orderItem = event => {
        event.preventDefault();
        this.setState({ isModalShown: true });
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      }

    render() {
        return (
            <React.Fragment>

                <div  id={this.props.id} className="col-xs-6 list-container">
                    <div className="list mb-2">
                        <div className="list-header">
                            <h5 className="card-header white-text text-left">
                                <span className="cuisine"><strong>{this.props.cuisine}</strong></span>
                            </h5>
                            <img className="item-image" src="https://www.paintthekitchenred.com/wp-content/uploads/2016/12/Instant-Pot-Chicken-Curry-Landscape.jpg" alt="" />
                        </div>
                        <div className="list-content">
                            <span onClick={this.removeDish} data-id={this.props.id} className="delete-item"><i className="fas fa-2x fa-times-circle"></i></span>
                            <h2>{this.props.dish}</h2>
                            <div className="container-fluid card-container">
                                <div className="row">
                                    <div className="col-xs-6 card-details">
                                        <p>Price: <span className="list-meta-details">{this.props.price}</span></p>
                                    </div>
                                    <div className="col-xs-6 card-details">
                                        <p>Servings Available: <span className="list-meta-details">{this.props.servingUnit}</span></p>
                                    </div>
                                </div>
                            </div>

                            <p>Ingredients: <span className="list-meta">{this.props.ingredients}</span></p>
                            {/* <form className="formItems">
                                <div className="card-details-form">
                                    <label className="card-details">Servings</label>
                                    <select name="servingAmount" value={this.props.servingAmount} onChange={this.handleChange} className="card-details">
                                        <option default>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>

                                </div>
                                <button onClick={this.orderItem} data-toggle="modal" data-target="#orderItemModal" className="btn btn-primary float-right my-4" type="submit">Order Now</button>
                            </form> */}
                        </div>
                    </div>
                </div>
                {/* <OrderItemModal serving={this.state.servingAmount} item={this.state.item} total={this.state.price * this.state.servingAmount} /> */}
            </React.Fragment>
        )
    }
}

