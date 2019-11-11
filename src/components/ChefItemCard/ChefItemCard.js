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
        console.log("Delete card");
        let obj = this.refs.DeleteButton;
        this.props.removeDish(obj.id);
    }
   
    render() {
        return (
            <React.Fragment>

                <div id={this.props.id} className="col-xs-6 list-container">
                    <div className="card-list mb-2">
                    
                        <div className="list-header">
                        
                            <h5 className="card-header white-text text-left">
                                <span className="cuisine"><strong>{this.props.cuisine}</strong></span>
                            </h5>
                            
                            <img className="itemCardImage"   src={this.props.imageURL ? this.props.imageURL: "https://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png"} alt={this.props.dish} />
                        </div>
                        
                        <div className="list-content">                           
                            <h1></h1>
                            <span   className="delete-item"><i ref="DeleteButton" onClick={this.remove} id={this.props.id} className="fas fa-2x fa-times-circle"></i></span>        
                            <h2 className="dish-name">{this.props.dish}</h2>
                            <div className="container-fluid cont">
                                <div className="row">
                                    <div className="col-xs-6 list-meta-price">
                                        <p>Price: $<span className="list-meta-details">{this.props.price}</span></p>
                                    </div>
                                    <div className="col-xs-6 list-meta-serving">
                                        <p>Servings: <span className="list-meta-details">{this.props.quantity}</span></p>
                                    </div>
                                </div>
                            </div>

                            <p className="ingredients-chef">Ingredients: <span className="list-meta">{this.props.ingredients}</span></p>
                            <p className="ingredients-chef">Description: <span className="list-meta">{this.props.description}</span></p>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

