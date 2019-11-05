import React from "react";
import "./ButtonJumbotron.css"

function ButtonJumbotron(props) {
    return (
        <div
            style={{ height: 100, clear: "both", paddingTop: 40, textAlign: "center" }}
            className="jumbotron">
            <label htmlFor="online">Your Items are not online</label>
            <button type="button" className="btn btn-danger" style={{ float: "right", marginBottom: 10 }}>Offline</button>
        </div>

    );
}

export default ButtonJumbotron;