import React, { Component } from 'react';
import "./NavBar.css"
import ChefLogIn from "../ChefLogIn/ChefLogIn";
import UserLogIn from "../UserLogIn/UserLogIn";


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-100px";
//     }
//     prevScrollpos = currentScrollPos;
// }

export default class NavBar extends Component {
    state = {
        isChef: false,
        isUser: false,
        isHidden: false,
        logoutHidden: true
    }

    getUserLoginForm = (e) => {
        console.log("this is user working!")
        this.setState({ isUser: true, isHidden: true, logoutHidden: false })
    }

    getChefLoginForm = (e) => {
        console.log("this is chef working!")
        this.setState({ isChef: true, isHidden: true, logoutHidden: false })
    }

    render() {
        return (
            <div>
                <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="/"><strong>Olaf</strong><i class="fas fa-carrot"></i></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/chef">Chef Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user">User Dashboard</a>
                            </li>
                            <li className="nav-item" hidden={this.state.isHidden}>
                                <a className="nav-link" href="#" onClick={this.getChefLoginForm} data-toggle="modal" data-target="#modalChefLogInForm">Chef Login</a>
                            </li>
                            <li className="nav-item" hidden={this.state.isHidden}>
                                <a className="nav-link" href="#" ref={btn => { this.btn = btn; }} onClick={this.getUserLoginForm} data-toggle="modal" data-target="#userLogInForm">User Login</a>
                            </li>
                            <li className="nav-item" hidden={this.state.logoutHidden}>
                                <a className="nav-link" href="/">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ChefLogIn />
                <UserLogIn />
            </div>
        )
    }
}
