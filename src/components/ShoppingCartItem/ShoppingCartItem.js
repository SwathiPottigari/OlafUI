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
                        <tr><td><img src='https://www.thespruceeats.com/thmb/uFOA5DvOiyTQ2D3bcXY3WBMC90Y=/2048x1365/filters:fill(auto,1)/leftovers-night-fried-rice-recipe-909250-10_preview-5aff43748e1b6e00360c65b0.jpeg' className='full-width'></img>
                            </td>
                            <td><br /><span className='thin'>Fried Rice</span>
                                <br />Amount Ordered: 3<br /> 
                                <span onClick={this.remove} className='thin small remove'><br /><a>Remove item <i className="fas ml-2 fa-trash"></i></a><br /></span>
                            </td>
                        </tr>
                        <tr><td><div className='price'>$5.00</div></td></tr>
                    </tbody>

                </table>
                <div className='line'></div>



            </React.Fragment>


        )
    }
}
