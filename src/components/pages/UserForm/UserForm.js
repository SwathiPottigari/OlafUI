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
<<<<<<< HEAD
        url: "http://localhost:8080",
=======
        url: "https://olafapi.herokuapp.com",
        isFirstNameError: false,
        isLastNameError: false,
        isPhoneNumberError: false,
        isEmailError: false,
        isPasswordError: false,

>>>>>>> 788e7f24a53d2ce793ecf2ef04353d93c9a5b8f6
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phoneNumberRegEx = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
        this.setState({isFirstNameError: false, isLastNameError: false, isPhoneNumberError: false, isEmailError: false, isPasswordError: false}) 
        if (this.state.firstName === '') {
            this.setState({isFirstNameError: true});
        } else if (this.state.lastName === '') {
            this.setState({isLastNameError: true});
        } else if (phoneNumberRegEx.test(this.state.phoneNumber) === false) {
            this.setState({isPhoneNumberError: true});
        } else if (emailRegEx.test(this.state.email) === false) {
            this.setState({isEmailError: true});
        } else if (this.state.password.length < 8) {
            this.setState({isPasswordError: true});
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
                if (res.data.isSuccess === false) {
                    alert("You already have an account. Please login.");
                }
                else {
                    this.setState({
                        firstName: "",
                        lastName: "",
                        phoneNumber: "",
                        email: "",
                        password: "",
                        loggedInUser: res.data.user,
                        redirect: true
                    })
                }
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

                <AnimationContainer />
                <h1 className="form-title text-center">Create an Account</h1>
                <div class="form-container">

                    <form className="wizard-form text-center border border-light p-5" action="#!">

                        <p class="h4 mb-4">User Sign Up</p>

                        <div className="form-row mb-4">
                            <div className="col">
                                <input
                                    type="text"
                                    required
                                    name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="First name" className={this.state.isFirstNameError ? "form-control error": "form-control"} />
                            </div>
                            <div className="col">
                                <input type="text" required name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Last name" className={this.state.isLastNameError ? "form-control error": "form-control"} />
                            </div>
                        </div>

                        <input type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={this.state.phoneNumber} onChange={this.handleInputChange} className={this.state.isPhoneNumberError ? "form-control error": "form-control"} placeholder="Mobile Number" />
                        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                            Format: 555-555-5555</small>
                        <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} className={this.state.isEmailError ? "form-control error": "form-control"} placeholder="E-mail" />
                        <br />
                        <input name="password" minLength="8" required type="password" className={this.state.isPasswordError ? "form-control error": "form-control"} placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
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
