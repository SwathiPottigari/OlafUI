
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
                        <p>Dish:<span className="list-meta">{this.props.currentMenu.dish}</span></p>
                        <p>Ingredients: <span className="list-meta">{}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
