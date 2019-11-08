import React, { Component } from 'react';
import axios from "axios";
import "./ChefForm.css"
import { Redirect } from 'react-router-dom';
import AnimationContainer from "../../AnimationContainer/AnimationContainer"

class ChefForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      url: "http://localhost:8080",
      redirect: false,
      firstName: '',
      lastName: '',
      kitchenName: '',
      license: '',
      specialities: '',
      password: '',
      contact: '',
      email: '',
      address: '',
      streetAddress: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
      user: "chef",
      loggedInUser: '',
      isFirstNameError: false,
      isLastNameError: false,
      isPhoneNumberError: false,
      isEmailError: false,
      isPasswordError: false,
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    const { firstName, lastName, kitchenName, license, specialities, password, contact, email, streetAddress, apartment, city, state, zipCode } = this.state
    event.preventDefault()
    const address = `${streetAddress} ${apartment} ${city} ${state} ${zipCode}`;
    
   if (this.state.streetAddress.length === 0 || this.state.city.length === 0 || this.state.state.length === 0 || this.state.zipCode.length === 0) {
      alert("Please enter a valid address")
    } else {

      axios.post(`${this.state.url}/api/signup`,
        {
          firstName: firstName,
          lastName: lastName,
          kitchenName: kitchenName,
          license: license,
          specialities: specialities,
          password: password,
          contact: contact,
          email: email,
          address: address,
          user: "chef"
        },
        {
          withCredentials: true
        }
      ).then(res => {
        this.setState({
          firstName: '',
          lastName: '',
          kitchenName: '',
          license: '',
          specialities: '',
          password: '',
          contact: '',
          email: '',
          streetAddress: '',
          apartment: '',
          city: '',
          state: '',
          zipCode: '',
          loggedInChef: res.data.chef,
          redirect: true
        });
      })
    }
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/chef' />
    }
  }

  _next = () => {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneNumberRegEx = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    this.setState({isFirstNameError: false, isLastNameError: false, isPhoneNumberError: false, isEmailError: false, isPasswordError: false}) 
    if (this.state.firstName === '') {
      console.log("name has an error")
      this.setState({isFirstNameError: true});
    } else if (this.state.lastName === '') {
      console.log("last name has an error")
      this.setState({isLastNameError: true});
    } else if (phoneNumberRegEx.test(this.state.contact) === false) {
      console.log("last name has an error")
      this.setState({isPhoneNumberError: true});
    } else if (emailRegEx.test(this.state.email) === false) {
      console.log("last name has an error")
      this.setState({isEmailError: true});
    } else if (this.state.password.length < 8) {
      console.log("last name has an error")
      this.setState({isPasswordError: true});
    } else {
      console.log("There are no errors")
      this.goNextPage();
  }
}
 goNextPage = () => {
  let currentStep = this.state.currentStep
  currentStep = currentStep + 1
  this.setState({
    currentStep: currentStep
  })}

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  render() {
    return (
      <React.Fragment>

        <h1 className=" form-title text-center">Create an Account</h1>

        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          contact={this.state.contact}
          email={this.state.email}
          password={this.state.password}
          isFirstNameError={this.state.isFirstNameError}
          isLastNameError={this.state.isLastNameError}
          isPhoneNumberError={this.state.isPhoneNumberError}
          isEmailError={this.state.isEmailError}
          isPasswordError={this.state.isPasswordError}

          _next={this._next}

        />
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          kitchenName={this.state.kitchenName}
          license={this.state.license}
          specialities={this.state.specialities}
          streetAddress={this.state.streetAddress}
          apartment={this.state.apartment}
          city={this.state.city}
          zipCode={this.state.zipCode}
          state={this.state.state}
          address={`${this.state.streetAddress} ${this.state.apartment} ${this.state.city} ${this.state.state} ${this.state.zipCode}`}
          _prev={this._prev}
          handleSubmit={this.handleSubmit}
        />
        {this.renderRedirect()}
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <React.Fragment>
      <AnimationContainer />

      <div className="form-container">

        <form className="wizard-form text-center border border-light p-5" action="#!">

          <p className="h4 mb-4">Chef Sign Up</p>
          <p className="step-number">Step 1 of 2</p>

          <div className="form-row mb-4">
            <div className="col">
              <input type="text" required value={props.firstName} name="firstName" onChange={props.handleChange} placeholder="First name" className={props.isFirstNameError ? "form-control error": "form-control"}/>
            </div>
            <div className="col">
              <input type="text" name="lastName" required value={props.lastName} onChange={props.handleChange} placeholder="Last name" className={props.isLastNameError ? "form-control error": "form-control"} />
            </div>
          </div>

          <input type="tel" name="contact" required value={props.contact} onChange={props.handleChange} className={props.isPhoneNumberError ? "form-control error": "form-control"} placeholder="Mobile Number" />
          <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
            Format: 555-555-5555</small>

          <input className="mb-4" type="email" pattern=".+@tutsplus\.com|.+@envato\.com" required name="email" value={props.email} onChange={props.handleChange} className={props.isEmailError ? "form-control error": "form-control"} placeholder="E-mail" />
          <br />
          <input minLength="8" required type="password" className={props.isPasswordError ? "form-control error": "form-control"} placeholder="Password" name="password" value={props.password} onChange={props.handleChange} />
          <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
            At least 8 characters</small>


          <button
            className="btn btn-success float-right"
            type="button" onClick={props._next}>
            Next
      </button>
        </form>

      </div>
    </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <React.Fragment>
      <AnimationContainer />

      <div className="form-container">

        <form className="wizard-form text-center border border-light p-5" action="#!">

          <p className="h4 mb-4">Chef Sign Up</p>
          <p className="step-number">Step 2 of 2</p>


          <div className="form-row mb-4">
            <div className="col">
              <input type="text" required name="kitchenName" value={props.kitchenName} onChange={props.handleChange} placeholder="Give your kitchen a name" className="form-control" />
            </div>
            <div className="col">
              <input type="text" required name="license" value={props.license} onChange={props.handleChange} placeholder="Food Handler's License Number" className="form-control" />
            </div>
          </div>
          <input type="text" required name="specialities" value={props.specialities} onChange={props.handleChange} className="form-control" placeholder="Your dish specialities" />
          <label className="form-text">Home Address</label>
          <input type="text" name="streetAddress" required defaultValue={props.streetAddress} onChange={props.handleChange} className="form-control" placeholder="Street Address" />
          <br />
          <input type="text" name="apartment" required defaultValue={props.apartment} onChange={props.handleChange} className="form-control" placeholder="Street Address line 2" />
          <br />
          <div className="form-row mb-4">
            <div className="col">
              <input name="city" type="text" className="form-control" placeholder="City" onChange={props.handleChange} value={props.city} />
            </div>
            <div className="col">
              <select name="state" onChange={props.handleChange} value={props.state} className="form-control browser-default custom-select">
                <option defaultValue>State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="col">
              <input name="zipCode" type="text" className="form-control" placeholder="Postal / Zip Code" onChange={props.handleChange} value={props.zipCode} />
            </div>
          </div>

          <div>
            <button
              className="btn btn-secondary float-left"
              type="button" onClick={props._prev}>
              Previous
        </button>
            <button onClick={props.handleSubmit} className="btn btn-success float-right" type="submit">Create Account</button>
          </div>


        </form>
      </div>

    </React.Fragment>

  );
}



export default ChefForm;


