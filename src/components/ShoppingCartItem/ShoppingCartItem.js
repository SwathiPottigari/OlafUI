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

    remove=()=>{
        let obj = this.refs.DeleteButton;
        this.props.removeDish(obj.id);
    }

    render() {
        return (

            <React.Fragment>

                <table className='order-table'>
                    <tbody>
                        <tr><td><img src='https://www.thespruceeats.com/thmb/uFOA5DvOiyTQ2D3bcXY3WBMC90Y=/2048x1365/filters:fill(auto,1)/leftovers-night-fried-rice-recipe-909250-10_preview-5aff43748e1b6e00360c65b0.jpeg' className='full-width'></img>
                            </td>
                            <td><br /><span className='thin'>Fried Rice</span>
                                <br />Amount Ordered: 3<br /> 
                                <span onClick={this.remove} className='thin small'><br /><a>Remove item <i className="fas ml-2 fa-trash"></i></a><br /></span>
                            </td>
                        </tr>
                        <tr><td><div className='price'>$5.00</div></td></tr>
                    </tbody>

                </table>
                <div className='line'></div>




                {/* <div className="col-xs-12 cart-item-card col-xl-12">
                    <div className="list-item">
                        <div className="shopping-list-header">
                            <h5 className="shopping-card-header white-text text-left">
                                <span className="cuisine"><strong>Chinese</strong></span>
                            </h5>
                            <img className="shopping-item-image" src="https://www.thespruceeats.com/thmb/uFOA5DvOiyTQ2D3bcXY3WBMC90Y=/2048x1365/filters:fill(auto,1)/leftovers-night-fried-rice-recipe-909250-10_preview-5aff43748e1b6e00360c65b0.jpeg" alt="" />
                        </div>
                        <div className="list-content">
                            <h2>Fried Rice</h2>
                            <div className="container-fluid card-container">
                                <div className="row">
                                    <div className="col-xs-6 price">
                                        <p className="price-font">Price: <span className="list-meta-details price-font">$5.99</span></p>
                                    </div>
                                    <div className="col-xs-6 card-details">
                                        <p>Servings Ordered: <span className="list-meta-details">6</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* {this.renderRedirect()} */}
                {/* <OrderItemModal serving={this.state.servingAmount} item={this.state.item} total={this.state.price * this.state.servingAmount} /> */}
            </React.Fragment>


        )
    }
}
