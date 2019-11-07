import React, { Component } from "react";
import Switch from "react-switch";
import "./ToggleSwitch.css";
import axios from "axios";


export default class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      isOnline: false,
      message: ["Offline", "Online"],
      url: "http://localhost:8080",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  // handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //         [name]: value
  //     });
  // };

  componentDidMount() {
    let setVariable = this;
    axios.get(this.state.url + "/api/onlineChef/" + this.props.chefId).then(function (results) {
      console.log(results.data);
      if (results.data.length === 0) {
        setVariable.setState({
          isOnline: false
        });
      }
      else {
        setVariable.setState({
          isOnline: true
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
  }


  goOnline = event => {
    event.preventDefault();
    let setVariable = this;
    console.log(this.state.isOnline);
    if (!this.state.isOnline) {
      axios.post(this.state.url + "/api/makeAvailable/" + this.props.chefId).then(function (result) {
      }).catch(function (error) {
        console.log(error);
      });
      setVariable.setState({ isOnline: true })
    }
    else {
      axios.delete(this.state.url + "/api/makeUnavailable/" + this.props.chefId).then(function (result) {
      }).catch(function (error) {
        console.log(error);
      });
      setVariable.setState({ isOnline: false })
    }
  }

  render() {
    return (
      <div className="on-off">

        <label>
              <Switch
                onChange={this.handleChange}
                onClick={this.goOnline}
                checked={this.state.checked}
                className="react-switch"
              />
              <p>Your menu is <span>{this.state.checked ? 'online' : 'offline'}</span>.</p>
        </label>

      </div>
    );
  }
}