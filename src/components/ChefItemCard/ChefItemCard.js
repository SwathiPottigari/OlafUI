import React, { Component } from 'react';
import "./ChefItemCard.css";
import OrderItemModal from '../OrderItemModal/OrderItemModal';

export default class ChefItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            servingAmount: '1',
            price: '6.99',
            item: 'Chicken Curry',
            isModalShown: false
        }
    }

    // findFoodItems = query => {
    //     API.search(query)
    //       .then(res => this.setState({ result: res.data }))
    //       .catch(err => console.log(err));
    //   };    

    // removeDish = id => {
    //         API.removeDish(id)
    //             .then(res => this.menuItems())
    //             .catch(err => console.log(err));
    //     };

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

                <div className="col-xs-6 list-container">
                    <div className="list mb-2">
                        <div className="list-header">
                            <h5 className="card-header white-text text-left">
                                <span className="cuisine"><strong>Indian</strong></span>
                            </h5>
                            <img className="item-image" src="https://www.paintthekitchenred.com/wp-content/uploads/2016/12/Instant-Pot-Chicken-Curry-Landscape.jpg" alt="" />
                        </div>
                        <div className="list-content">
                            <span onClick={this.removeDish} className="delete-item"><i className="fas fa-2x fa-times-circle"></i></span>
                            <h2>Chicken Curry</h2>
                            <div className="container-fluid card-container">
                                <div className="row">
                                    <div className="col-xs-6 card-details">
                                        <p>Price: <span className="list-meta-details">$6.99</span></p>
                                    </div>
                                    <div className="col-xs-6 card-details">
                                        <p>Servings Available: <span className="list-meta-details">4</span></p>
                                    </div>
                                </div>
                            </div>

                            <p>Ingredients: <span className="list-meta">the, list, of, ingredients, goes, here</span></p>
                            <form className="formItems">
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
                            </form>
                        </div>
                    </div>
                </div>
                <OrderItemModal serving={this.state.servingAmount} item={this.state.item} total={this.state.price * this.state.servingAmount} />
            </React.Fragment>
        )
    }
}

