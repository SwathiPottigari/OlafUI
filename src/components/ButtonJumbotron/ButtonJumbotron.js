import React, { Component } from 'react'
import "./ButtonJumbotron.css"



class ButtonJumbotron extends Component {
    state = {
        isOnline: false,
        message: ["Offline", "Online"]
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    goOnline = event => {
        event.preventDefault();
        this.setState({isOnline: !this.state.isOnline})
    }
    render() {
        return (
            <div
                style={{ height: 100, clear: "both", paddingTop: 40, textAlign: "center" }}
                className="jumbotron">
                <button onChange={this.handleInputChange} onClick={this.goOnline} type="button" className={this.state.isOnline ? "btn btn-success" : "btn btn-danger"}style={{ float: "right", marginBottom: 10 }}>{this.state.isOnline ? this.state.message[1]: this.state.message[0]}</button>
                <h3>Current Menu</h3>
            </div>

        );
    }
}

export default ButtonJumbotron;