
import React, { Component } from 'react';
import "./ItemCard.css";

export default class ItemCard extends Component {

    state = {
        result: null,
    };

    componentDidMount() {
        console.log(this.props)
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
                        <span className="list-meta">
                            <span className="list-meta-item"> 2016</span>
                        </span>

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
                                        <span className="list-meta-price">{this.props.currentMenu.price}</span>
                                    </span>
                                </div>
                                <div className="col-xs-6">
                                    <span className="list-meta">
                                        <span className="list-meta-serving">Servings: {this.props.currentMenu.servingSize}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p>Ingredients: <span className="list-meta">{this.props.currentMenu.ingredients}</span></p>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
