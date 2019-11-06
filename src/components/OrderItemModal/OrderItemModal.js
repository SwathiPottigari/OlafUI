import React,{Component} from 'react';
import './OrderItemModal.css';

export default class OrderItemModal extends Component {
    
    state = {

    }
    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return (
            <div>
            <div className="modal fade" id="orderItemModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Please Confirm Your Order</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <p className="order">You ordered servingserving(s) of props.item.</p>
                            <p className="order">Your total comes to some amount here</p>
                            <p className="order-details">To confirm your order, click submit below and the chef will be notified. You will recieve a notification text message shortly with address details to collect your food items.</p>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="login-btn btn btn-info my-4 btn-block" data-dismiss="modal" type="submit">Submit Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

/* 
function OrderItemModal(props) {
    return (
        <div>
            <div className="modal fade" id="orderItemModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Please Confirm Your Order</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <p className="order">You ordered {props.serving} serving(s) of {props.item}.</p>
                            <p className="order">Your total comes to ${props.total}</p>
                            <p className="order-details">To confirm your order, click submit below and the chef will be notified. You will recieve a notification text message shortly with address details to collect your food items.</p>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="login-btn btn btn-info my-4 btn-block" data-dismiss="modal" type="submit">Submit Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItemModal;
*/