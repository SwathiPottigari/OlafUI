import React, { Component } from 'react';
import '../../App.css';

const divStyle = {
    "objectFit": "cover",
    "height": "100vh",
    "width": "100vw"
}

export default class NoMatch extends Component {
    render() {
        return (
            <div className="error-container">
                <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" style={divStyle} alt="404 error"/>
            </div>
        )
    }
} 
