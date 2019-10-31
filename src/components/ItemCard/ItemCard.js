import React, { Component } from 'react';
import "./ItemCard.css";

export default class ItemCard extends Component {
    state = {
        result: {},
      };
    
    //   findFoodItems = query => {
    //     API.search(query)
    //       .then(res => this.setState({ result: res.data }))
    //       .catch(err => console.log(err));
    //   };
    
    render() {
        return (
            <div className="col-xs-6">
                <div className="list mb-2">
                    <div className="list-header">
                        <img src="https://www.paintthekitchenred.com/wp-content/uploads/2016/12/Instant-Pot-Chicken-Curry-Landscape.jpg" alt=""/>
                    </div>
                    <div className="list-content">
                        <h2>Chicken Curry</h2>
                        <span className="list-meta">
                            <span className="list-meta-item"> 2016</span>
                        </span>
                        <p>Ingredients: <span className="list-meta">the, list, of, ingredients, goes, here</span></p>
                    </div>
                </div>
            </div>
        )
    }
}
