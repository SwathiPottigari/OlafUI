import React, { Component } from 'react';
import AnimationContainer from "../../AnimationContainer/AnimationContainer"
import "./UserForm.css";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import ErrorModal from "../../ErrorModal/ErrorModal";

export default class UserForm extends Component {
    state = {
        isShown: false,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        user: "customer",
        loggedInUser: '',
        redirect: false,
        url: "https://olafapi.herokuapp.com",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName === '') {
            alert("Please enter you first name")
        } else if (this.state.lastName === '') {
            alert("Please enter you last name")
        } else if (this.state.password.length < 8) {
            alert("You password must be 8 or more characters")
        } else {

            axios.post(`${this.state.url}/api/signup`,
                {
                    email: this.state.email,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    contact: this.state.phoneNumber,
                    user: this.state.user
                },
                {
                    withCredentials: true
                }
            ).then(res => {
                this.setState({
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    password: "",
                    loggedInUser: res.data.user,
                    redirect: true
                });
            })
        }

    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user' />
        }
    }

    render() {
        return (
            <React.Fragment>

                <h1 className="form-title text-center">Create an Account</h1>
                <AnimationContainer />
                <div className="form-container">

                    <form className="wizard-form text-center border border-light p-5" action="#!">

                        <p className="h4 mb-4">User Sign Up</p>

                        <div className="form-row mb-4">
                            <div className="col">
                                <input
                                    type="text"
                                    required
                                    name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="First name" className="form-control" />
                            </div>
                            <div className="col">
                                <input type="text" required name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Last name" className="form-control" />
                            </div>
                        </div>

                        <input type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={this.state.phoneNumber} onChange={this.handleInputChange} className="form-control" placeholder="Mobile Number" />
                        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                            Format: 555-555-5555</small>
                        <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="E-mail" />
                        <br />
                        <input name="password" minLength="8" required type="password" className="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
                        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                            At least 8 characters</small>

                        <button onClick={this.handleFormSubmit} className="btn btn-success float-right" type="submit">Create Account</button>

                    </form>
                    {this.renderRedirect()}
                </div>
            </React.Fragment>
        )
    }
}
