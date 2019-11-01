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
            // console.log(res.data,res.status);
            this.setState({
                email: "",
                password: "",
                loggedInUser: res.data.user,
                redirect: true
            });
            // <Chef/>;
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
           const obj= this.refs.modalChefLogInForm;
           console.log(obj);
        //    obj.dialog('close');
            return <Redirect to='/chef' />
        }
    }

    render() {
        return (
            <div>
                {!this.state.redirect&&<div className="modal fade" id="modalChefLogInForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true" ref="modalChefLogInForm">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Write to us</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <i className="fas fa-user prefix grey-text"></i>
                                    <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="E-mail" />
                                    <label data-error="wrong" data-success="right" htmlFor="form34">Your name</label>
                                </div>

                                <div className="md-form mb-5">
                                    <i className="fas fa-envelope prefix grey-text"></i>
                                    <input type="password" name="password" required value={this.state.phoneNumber} onChange={this.handleInputChange} className="form-control" placeholder="Mobile Number" />
                                    <label data-error="wrong" data-success="right" htmlFor="form29">Your email</label>
                                </div>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button onClick={this.handleFormSubmit}  data-dismiss="modal" className="btn btn-info my-4 btn-block" type="submit">Log In</button>
                            </div>
                        </div>
                    </div>
                </div>}
                {this.renderRedirect()}
            </div>

        )
    }
}
