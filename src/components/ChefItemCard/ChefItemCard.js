import React, { Component } from 'react';
import "./ChefItemCard.css";
import axios from "axios";
import { Redirect } from 'react-router-dom';

export default class ChefItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            servingAmount: "",
            price: "",
            item: "",
            isModalShown: false,
            url: "http://localhost:8080",
            redirect: false
        }
    }

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

    remove=()=>{
        let obj = this.refs.DeleteButton;
        this.props.removeDish(obj.id);
    }
   
    render() {
        return (
            <React.Fragment>

                <div id={this.props.id} className="col-xs-6 list-container">
                    <div className="list mb-2">
                        <div className="list-header">
                            <h5 className="card-header white-text text-left">
                                <span className="cuisine"><strong>{this.props.cuisine}</strong></span>
                            </h5>
                            <img className="item-image" src={this.props.imageURL} alt="" />
                        </div>
                        <div className="list-content">
                            <span ref="DeleteButton" onClick={this.remove} id={this.props.id} className="delete-item"><i className="fas fa-2x fa-times-circle"></i></span>
                            <h2>{this.props.dish}</h2>
                            <div className="container-fluid card-container">
                                <div className="row">
                                    <div className="col-xs-6 card-details">
                                        <p>Price: <span className="list-meta-details">{this.props.price}</span></p>
                                    </div>
                                    <div className="col-xs-6 card-details">
                                        <p>Servings Available: <span className="list-meta-details">{this.props.quantity}</span></p>
                                    </div>
                                </div>
                            </div>

                            <p>Ingredients: <span className="list-meta">{this.props.ingredients}</span></p>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

