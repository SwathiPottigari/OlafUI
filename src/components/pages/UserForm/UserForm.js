import React, { Component } from 'react';
import "./UserForm.css";

export default class UserForm extends Component {
    state = {
        isShown: false,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        user: "customer"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        alert(`Welcome to OlafGo ${this.state.firstName} ${this.state.lastName}!`);
        this.setState({ firstName: "", lastName: "", phoneNumber: "", email: "", password: "" });
    };

    render() {
        return (
            <div class="form-container">

                <form class="text-center border border-light p-5" action="#!">

                    <p class="h4 mb-4">Sign Up</p>

                    <div class="form-row mb-4">
                        <div class="col">
                            <input type="text" required name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="First name" class="form-control" />
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
                    <input name="password" minlength="8" required type="password" class="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters</small>

                    <button onClick={this.handleFormSubmit} class="btn btn-info my-4 btn-block" type="submit">Create Account</button>

                </form>
                
            </div>

        )
    }
}
