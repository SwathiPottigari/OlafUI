import React, { Component } from 'react';
import "./ChefLogIn.css";

export default class ChefLogIn extends Component {
    state = {
        isShown: false,
        email: '',
        password: '',
        user: "chef"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
    };

    render() {
        return (

            <div className="modal fade" id="modalChefLogInForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold"></h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                                <i className="fas fa-user prefix grey-text"></i>
                                <label data-error="wrong" data-success="right" htmlFor="form34">Your E-mail Address</label>
                                <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="E-mail" />
                                <br/>
                                <i className="fas fa-lock"></i>
                                <label data-error="wrong" data-success="right" htmlFor="form34">Your Login Password</label>
                                <input type="password" required name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Password" />
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button onClick={this.handleFormSubmit} className="btn btn-info my-4 btn-block" type="submit">Log In</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
