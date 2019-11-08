import React, { Component } from 'react';
import "../NavBar/NavBar.css"
import classnames from "classnames";
import axios from "axios";
import { Redirect } from 'react-router-dom';


export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            isChef: false,
            isUser: false,
            isHidden: false,
            logoutHidden: true,
            url: "http://localhost:8080",
            userName: "",
            redirect:false
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        let setVariable = this;
        axios.get(this.state.url + "/api/user/" + this.props.userId +"/"+this.props.user).then(
            function(results){
                setVariable.setState({
                    userName: results.data[0].firstName
                })

            }
        ).catch(function(error){
            console.log(error);
        })
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

    setcurrentUser = ()=>{
        this.setState({currentUser:this.props.currentCustomer})
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user' />
        }
    }

    logout=()=>{
        this.setState({
            redirect: true
        })
        localStorage.clear();
        axios.get(this.state.url+"/api/logout").then(function(results){
            console.log("successfully logged out");
        }).catch(function(error){
            console.log(error);
        });
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
                            <li className="nav-item">
                                <h4 onClick={this.logout}>Logout {this.state.userName}</h4>
                                {this.renderRedirect()}
                            </li>
                        </ul>     
                    </div>
                </nav>
            </div>
        )
    }
}