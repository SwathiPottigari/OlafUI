import React, { Component } from "react";
import Switch from "react-switch";
import "./ToggleSwitch.css";
import axios from "axios";


export default class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      message: ["Offline", "Online"],
      url: "http://localhost:8080",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    this.goOnline();
  }

  

  componentDidMount() {
    let setVariable = this;
    
    axios.get(this.state.url + "/api/onlineChef/" + this.props.chefId).then(function (results) {
      
      if (results.data.length === 0) {
        setVariable.setState({
          checked: false
        });
      }
      else {
        setVariable.setState({
          checked: true
        });        
      }
    }).catch(function (error) {
      console.log(error);
    });
  }


  goOnline = () => {   
    if (this.state.checked) {
      axios.post(this.state.url + "/api/makeAvailable/" + this.props.chefId).then(function (result) {
      }).catch(function (error) {
        console.log(error);
      });
    }
    else {
      axios.delete(this.state.url + "/api/makeUnavailable/" + this.props.chefId).then(function (result) {
      }).catch(function (error) {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div className="on-off">

        <label>

              <p>              <Switch
                onChange={this.handleChange}
                onClick={this.goOnline}
                checked={this.state.checked}
                className="react-switch"
              /> Your kitchen is currently <span>{this.state.checked ? 'OPEN' : 'CLOSED'}</span></p>
        </label>

      </div>
    );
  }
}