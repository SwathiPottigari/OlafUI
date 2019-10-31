import React, { Component } from 'react';
import "./FormPersonalDetails.css";

export default class UserForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
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

                    <div class="form-row mb-4">
                        <div class="col">
                            <input type="text" required name="kitchenName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="Give your kitchen a name" class="form-control" />
                        </div>
                        <div class="col">
                            <input type="text" required name="license" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Food Handler's License Number" class="form-control" />
                        </div>
                    </div>

                    <input type="text" required name="sepcialities" value={this.state.email} onChange={this.handleInputChange} class="form-control" placeholder="Your dish specialities" />
                    <br />
                    <input name="password" minlength="8" required type="password" class="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters</small>

                    <button onClick={this.continue} class="btn btn-info my-4 btn-block" type="submit">Next</button>

                </form>
                
            </div>

        )
    }
}
