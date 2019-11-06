import React, { Component } from 'react';
import "./NavBar.css"
import ChefLogIn from "../ChefLogIn/ChefLogIn";
import UserLogIn from "../UserLogIn/UserLogIn";
import classnames from "classnames";


export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            isChef: false,
            isUser: false,
            isHidden: false,
            logoutHidden: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        console.log("navbar", this.props)
      
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    // state = {
    //     isChef: false,
    //     isUser: false,
    //     isHidden: false,
    //     logoutHidden: true
    // }

    getUserLoginForm = (e) => {
        this.setState({ isUser: true, isHidden: true, logoutHidden: false })
    }

    getChefLoginForm = (e) => {
        this.setState({ isChef: true, isHidden: true, logoutHidden: false })
    }

    setcurrentUser = ()=>{
        this.setState({currentUser:this.props.currentCustomer})
    }
    render() {
        return (
            <div>
                <nav
                    id="navbar" className={classnames("navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top", {
                        "navbar--hidden": !this.state.visible
                    })}
                >
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
