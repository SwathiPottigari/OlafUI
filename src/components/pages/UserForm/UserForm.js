import React, { Component } from 'react';
import AnimationContainer from "../../AnimationContainer/AnimationContainer"
import "./UserForm.css";
import axios from "axios";
import { Redirect } from 'react-router-dom';

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
        url: "http://localhost:8080",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

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
            <div class="form-container">

                <form class="wizard-form text-center border border-light p-5" action="#!">

                    <p class="h4 mb-4">Sign Up</p>

                    <div class="form-row mb-4">
                        <div class="col">
                            <input 
                                type="text" 
                                required 
                                name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="First name" class="form-control" />
                        </div>
                        <div class="col">
                            <input type="text" required name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Last name" class="form-control" />
                        </div>
                    </div>

                    <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} class="form-control" placeholder="E-mail" />
                    <br />
                    <input type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={this.state.phoneNumber} onChange={this.handleInputChange} class="form-control" placeholder="Mobile Number" />
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        Format: 206-339-4592</small>
                    <input name="password" minLength="8" required type="password" class="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters</small>

                    <button onClick={this.handleFormSubmit} class="btn btn-primary" type="submit">Create Account</button>

                </form>
                {this.renderRedirect()}
            </div>
            </React.Fragment>

        )
    }
}
