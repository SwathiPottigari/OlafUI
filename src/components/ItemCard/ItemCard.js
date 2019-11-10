
import React, { Component } from 'react';
import "./ItemCard.css";
import "../OrderItemModal/OrderItemModal.js"
import axios from 'axios';


export default class ItemCard extends Component {

    state = {
        result: null,
        customerQty: 1,
        childOrderItems: {}
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

    setChildOrderItems = (val) => {
        this.state.childOrderItems = val
        console.log("Value of obj-", this.state.childOrderItems)

    }
    

   /*  orderItem = () => {
        try {
          return axios.post(`http://localhost:8080/api/order`,{
              orderedQuantity:this.state.customerQty,
              CustomerId:this.props.currentCustomer.id,
              MenuId:this.props.currentMenu.id,
              ChefId:this.props.currentChef.id
          })
        } catch (error) {
          console.error(error)
        }
      }  */

    orderItem = (event) => {
        event.preventDefault();
        let objOrder = {}
        objOrder.orderedQuantity = this.state.customerQty
        objOrder.CustomerId = this.props.currentCustomer.id
        objOrder.MenuId = this.props.currentMenu.id
        objOrder.ChefId = this.props.currentChef.id
        objOrder.img=this.props.currentMenu.imageURL
        objOrder.dish=this.props.currentMenu.dish
        objOrder.price=this.props.currentMenu.price
        objOrder.updateOrder=(this.props.currentMenu.quantity-this.state.customerQty)
        this.setChildOrderItems(objOrder)
        this.props.setCurrentOrder(this.state.childOrderItems)
    }

    render() {
        return (
            <div className="col-xs-6">
                <div className="card-list mb-2">
                    <div className="list-header">
                        <h5 class="card-header white-text text-left">
                            <span className="cuisine"><strong>{this.props.currentMenu.cuisine}</strong></span>
                        </h5>
                        <img className="itemCardImage" src={this.props.currentMenu.imageURL ? this.props.currentMenu.imageURL: "https://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png"} alt={this.props.currentMenu.dish} />
                    </div>
                    <div className="list-content">
                        <h2 className="dish-name">{this.props.currentMenu.dish}</h2>
                        <div className="container-fluid cont">
                            <div className="row">
                                <div className="list-meta-price">
                                    <span className="list-meta">
                                        <span className="list-meta-price">Price: ${this.props.currentMenu.price}</span>
                                    </span>
                                </div>
                                <div className="list-meta-serving">
                                    <span className="list-meta">
                                        <span className="list-meta-serving">{this.props.currentMenu.servingUnit}: {this.props.currentMenu.quantity}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="ingredients">Ingredients: <span className="ingredients list-meta">{this.props.currentMenu.ingredients}</span></p>
                        <p className="ingredients">Description: <span className="ingredients list-meta">{this.props.currentMenu.description}</span></p>
                        <div className="card-details-form">
                            <label className="card-details">{this.props.currentMenu.servingUnit}</label>
                            <select name="customerQty" value={this.state.customerQty} onChange={this.handleChange} className="card-details">
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
                        <button onClick={this.orderItem} data-toggle="modal" data-target="#AddItemModal" className="btn btn-primary order-button my-4" type="submit">Order Now</button>

                    </div>
                </div>
            </div>

        )
    }
}
