
import React, { Component } from 'react';
import "./ItemCard.css";
import "../OrderItemModal/OrderItemModal.js"
import axios from 'axios';

export default class ItemCard extends Component {

    state = {
        result: null,
        customerQty:null
    };

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }

    componentDidMount() {
        console.log("state of cutomer qty",this.state.customerQty)
        console.log("props in itemcard",this.props)
    }


    orderItem = () => {
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
      } 

    render() {
        return (
            <div className="col-xs-6">
                <div className="list mb-2">
                    <div className="list-header">
                        <img src="https://www.paintthekitchenred.com/wp-content/uploads/2016/12/Instant-Pot-Chicken-Curry-Landscape.jpg" alt="" />
                    </div>
                    <div className="list-content">
                        <h2>{this.props.currentChef.kitchenName}</h2>
                        

                    <h5 class="card-header white-text text-left">
                        <span className="cuisine"><strong>{this.props.currentMenu.cuisine}</strong></span>
                    </h5>
                       {/*  <img src="https://www.paintthekitchenred.com/wp-content/uploads/2016/12/Instant-Pot-Chicken-Curry-Landscape.jpg" alt="" /> */}
                    </div>
                    <div className="list-content">
                        <span onClick={this.removeDish} className="delete-item"><i className="fas fa-2x fa-times-circle"></i></span>
                        <h2>{this.props.currentMenu.dish}</h2>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-6">
                                    <span className="list-meta">
                                        <span className="list-meta-price">Price: {this.props.currentMenu.price}</span>
                                    </span>
                                </div>
                                <div className="col-xs-6">
                                    <span className="list-meta">
                                        <span className="list-meta-serving">Servings: {this.props.currentMenu.quantity}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p>Ingredients: <span className="list-meta">{this.props.currentMenu.ingredients}</span></p>
                             <form className="formItems">
                                <div className="card-details-form">
                                    <label className="card-details">Servings</label>
                                    <select name="cutomerQty" value={this.state.customerQty} onChange={this.handleChange} className="card-details">
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
                            </form>
                    
                    </div>
                </div>
              {/*  <OrderItemModal 
               serving={this.state.servingAmount} 
               item={this.state.item} 
               total={this.state.price * this.state.servingAmount} 
               /> */}
            </div>
            
        )
    }
}
