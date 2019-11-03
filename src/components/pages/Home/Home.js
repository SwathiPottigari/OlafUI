import React, { Component } from 'react';
import NavBar from "../../NavBar/NavBar";
import "./Home.css";
import ChefLogIn from "../../ChefLogIn/ChefLogIn";
import UserLogIn from "../../UserLogIn/UserLogIn";

class Home extends Component {
    state = {
        isChef: false,
        isUser: false
    }

    render() {
        return (

            <div className="home">

                <NavBar />
                {this.state.isChef && <ChefLogIn />}
                {this.state.isUser && <UserLogIn />}
                <div className="landing">
                    <div className="home-wrap">
                        <div className="home-inner">
                        </div>
                    </div>
                </div>

                <div className="caption text-center">
                    <h1>Community Cuisine</h1>
                    <h3>Sign Up for Olaf</h3>
                    <a href="/signup/chef" className="btn btn-outline-light btn-lg">Chef</a>
                    
                    <a href="/signup/user" className="btn btn-outline-light btn-lg">User</a>
                </div>

                <div className="about">

                    <div className="row dark text-center jumbotron">

                        <div className="col-12">
                            <h3 className="heading">Better for People and the Planet</h3>
                            <div className="heading-underline"></div>
                        </div>

                        <div className="col-md-4">
                            <h3>Build Community</h3>
                            <div className="feature">
                                <i className="fas fa-people-carry fa-3x"></i>
                            </div>
                            <p className="feature-text">This will be a short paragraph telling the user how they can save time using our application.</p><br />
                        </div>

                        <div className="col-md-4">
                            <h3>Save Money</h3>
                            <div className="feature">
                                <i className="fas fa-dollar-sign fa-3x"></i>
                            </div>
                            <p className="feature-text">This will be a short paragraph telling the user how they can save money using our application.</p><br />
                        </div>

                        <div className="col-md-4">
                            <h3>Save the Planet</h3>
                            <div className="feature">
                                <i className="fas fa-globe-americas fa-3x"></i>
                            </div>
                            <p className="feature-text">This will be a short paragraph telling the user how they can save the planet using our application.</p><br />
                        </div>

                    </div>

                </div>

                <div className="contact">

                    <div className="fixed-background">

                        <div className="row dark justify-content-center">

                            <div className="col-md-5 text-center">

                                <div className="col-12">
                                    <h3 className="heading">Contact Us</h3>
                                    <div className="heading-underline"></div>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Recusandae at omnis fugit expedita quos maxime doloribus reprehenderit eius,
                                exercitationem voluptatum nemo eligendi ipsa accusantium quia,
                        aliquam alias quasi enim harum?</p><br />

                                <strong>Email: service@olaf.com</strong><br />
                                <strong>Phone: (206) 555-5555</strong>

                            </div>

                            {/* <hr className="socket" />
                    &copy; Copyright */}

                        </div>

                        <div className="fixed-wrap">
                            <div className="fixed">
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}



export default Home;