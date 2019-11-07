import React, { Component } from 'react'
import "./ButtonJumbotron.css";
import axios from "axios";



class ButtonJumbotron extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOnline: false,
            message: ["Offline", "Online"],
            url: "https://olafapi.herokuapp.com",
        }
    }
    // state = {

    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        let setVariable=this;
        axios.get(this.state.url+"/api/onlineChef/"+this.props.chefId).then(function(results){
            console.log(results.data);
            if(results.data.length===0){
                setVariable.setState({
                    isOnline: false
                });
            }
            else{
                setVariable.setState({
                    isOnline: true
                });
            }
        }).catch(function(error){
            console.log(error);
        });
    }


    goOnline = event => {
        event.preventDefault();
        let setVariable=this;
        console.log(this.state.isOnline);
        if(!this.state.isOnline){
            axios.post(this.state.url+"/api/makeAvailable/"+this.props.chefId).then(function(result){
            }).catch(function(error){
                console.log(error);
            });            
            setVariable.setState({ isOnline: true })
        }
        else{
            axios.delete(this.state.url+"/api/makeUnavailable/"+this.props.chefId).then(function(result){
            }).catch(function(error){
                console.log(error);
            });  
            setVariable.setState({ isOnline: false})
        }
    }
    render() {
        return (
            <div
                style={{ height: 100, clear: "both", paddingTop: 40, textAlign: "center" }}
                className="jumbotron">
                <h3 className="dash-head">Current Menu
                <button onChange={this.handleInputChange} onClick={this.goOnline} type="button" className={this.state.isOnline ? "btn btn-success" : "btn btn-danger"} style={{ float: "right", marginBottom: 10 }}>{this.state.isOnline ? this.state.message[1] : this.state.message[0]}</button></h3>
            </div>

        );
    }
}

export default ButtonJumbotron;
