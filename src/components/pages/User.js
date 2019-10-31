import React, { Component } from 'react';
import NavBar from "../NavBar/NavBar";
import UserForm from "../UserForm/UserForm";

export default class User extends Component {
    render() {
        return (
            <div>
                <NavBar />
               <h1>Here is the User page</h1> 
               <UserForm />
            </div>
        )
    }
}
