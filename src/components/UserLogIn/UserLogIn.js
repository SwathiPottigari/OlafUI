import React, { Component } from 'react';
import "./UserLogIn.css";
import axios from "axios";
import { Redirect } from 'react-router-dom';

export default class UserLogIn extends Component {
    state = {
        isShown: false,
        email: '',
        password: '',
        user: "customer",
        url: "https://olafapi.herokuapp.com",
        loggedInUser: '',
        redirect: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios.post(`${this.state.url}/api/login`,
            {
                email: this.state.email,
                password: this.state.password
            },
            {
                withCredentials: true
            }
        ).then(res => {
            if (res.data.isSuccess === false) {
                alert("Please sign up for an Olaf account.");
            } else {
            this.setState({
                email: "",
                password: "",
                loggedInUser: res.data.user,
                redirect: true
            })};
        })
    };


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user' />
        }
    }

    returnHome = () => {
        return window.location.reload();

    }

    render() {
        return (
            <div>
                <div className="modal fade" id="userLogInForm">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Welcome back to <h2 className="modal-icon-title">Olaf<i class="fas fa-carrot"></i></h2></h4>
                                <button onClick={this.returnHome} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <h5 className="text-center">Login to your User account</h5>
                                <div className="md-form mb-5">
                                    {/* <i className="fas fa-user prefix grey-text"></i> */}
                                    <label data-error="wrong" data-success="right" htmlFor="form34">Email</label>
                                    <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="" />
                                    <br />
                                    {/* <i className="fas fa-lock"></i> */}
                                    <label data-error="wrong" data-success="right" htmlFor="form34">Password</label>
                                    <input type="password" required name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="" />
                                </div>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button onClick={this.handleFormSubmit} className="btn draw-border" data-dismiss="modal" type="submit">Log In</button>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <p>Not a member? Create a <a href="/signup/user">USER</a> or <a href="/signup/chef">CHEF</a> account</p>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        )
    }
}
