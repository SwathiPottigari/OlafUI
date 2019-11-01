import React, { Component } from 'react';
import "./ChefLogIn.css";
import axios from "axios";
import Chef from "../pages/Chef/Chef";
import { Redirect } from 'react-router-dom'

export default class ChefLogIn extends Component {
    state = {
        isShown: false,
        email: '',
        password: '',
        user: "chef",
        url: "http://localhost:8080",
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
            this.setState({
                email: "",
                password: "",
                loggedInUser: res.data.user,
                redirect: true
            });
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/chef' />
        }
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="modalChefLogInForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Chef LogIn</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <i className="fas fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" htmlFor="form34">Your E-mail Address</label>
                                    <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="E-mail" />
                                    <br />
                                    <i className="fas fa-lock"></i>
                                    <label data-error="wrong" data-success="right" htmlFor="form34">Your Login Password</label>
                                    <input type="password" required name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Password" />
                                </div>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button onClick={this.handleFormSubmit} data-dismiss="modal" className="btn btn-info my-4 btn-block" type="submit">Log In</button>
                            </div>
                        </div>
                    </div>
                </div>}
                {this.renderRedirect()}
            </div>

        )
    }
}
