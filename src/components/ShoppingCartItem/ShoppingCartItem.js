import React, { Component } from 'react';
import "./ShoppingCartItem.css";
import "../OrderItemModal/OrderItemModal.js"
import axios from 'axios';

export default class ItemCard extends Component {

    state = {
        
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


    
    remove=()=>{
        let obj = this.refs.DeleteButton;
        this.props.removeDish(obj.id);
    }

    render() {
        return (

            <React.Fragment>
                
                <table className='order-table'>
                    <tbody>
                        <tr><td><img src={this.props.img ? this.props.img: "https://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png"} alt={this.props.dish} className='full-width'></img>
                            </td>
                            <td><br /><span className='thin'>{this.props.dish}</span>
                                <br />Amount Ordered: {this.props.orderedQuantity}<br /> 
                                <span onClick={this.remove} className='thin small remove'><br /><a>Remove item <i className="fas ml-2 fa-trash"></i></a><br /></span>
                            </td>
                        </tr>
                        <tr><td><div className='price'>${this.props.price}</div></td></tr>
                    </tbody>

                </table>
                <div className='line'></div>



            </React.Fragment>


        )
    }
}
