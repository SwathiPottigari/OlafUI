import React, { Component } from 'react';
import "./NavBar.css"


export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/"><strong>OlafGo</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/chef">Chef Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user">User Dashboard</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
