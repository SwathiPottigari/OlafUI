import React, { Component } from 'react';
import "./ChefItemCard.css";

export default class ChefItemCard extends Component {
    state = {
        result: {},
    };

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

    render() {
        return (
            <div className="col-xs-6">
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
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-6">
                                    <span className="list-meta">
                                        <span className="list-meta-price">$6.99</span>
                                    </span>
                                </div>
                                <div className="col-xs-6">
                                    <span className="list-meta">
                                        <span className="list-meta-serving">Servings: 4</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p>Ingredients: <span className="list-meta">the, list, of, ingredients, goes, here</span></p>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

