import React, { Component } from 'react';
import FormChefDetails from './FormChefDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
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
    user: "chef"
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

  render() {
    const { step } = this.state;
    const { firstName, lastName, kitchenName, license, specialities, password, contact, email, streetAddress, apartment, city, state, zipcode } = this.state;
    const values = { firstName, lastName, kitchenName, license, specialities, password, contact, email, streetAddress, apartment, city, state, zipcode };

    switch (step) {
      case 1:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormChefDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;