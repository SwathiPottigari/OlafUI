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
                    <h2>Olaf<i class="fas fa-carrot"></i></h2>
                    <h3>Sign Up for Olaf</h3>
                    <a href="/signup/chef" className="btn btn-outline-light btn-lg">Chef</a>

                    <a href="/signup/user" className="btn btn-outline-light btn-lg">User</a>
                </div>

                <div id="about" className="about">

                    <div className="row dark text-center jumbotron about-info">

                        <div className="col-12">
                            <h3 className="heading">Better for People and the Planet</h3>
                            <div className="heading-underline"></div>
                        </div>

                        <div className="col-md-4">
                            <h3>Community</h3>
                            <div className="feature">
                                <i className="fas fa-people-carry fa-3x"></i>
                            </div>
                            <p className="feature-text">Showcase your talents as an Olaf Chef by providing the community the opportunity to experience the taste of your authentic cuisine.</p><br />
                        </div>

                        <div className="col-md-4">
                            <h3>Health</h3>
                            <div className="feature">
                                <i className="fas fa-heart fa-3x"></i>
                            </div>
                            <p className="feature-text">Discover healthy, home cooked meals, without the costly expenses or preparation, while gaining more time to spend doing what you love.</p><br />
                        </div>

                        <div className="col-md-4">
                            <h3>Environment</h3>
                            <div className="feature">
                                <i className="fas fa-globe-americas fa-3x"></i>
                            </div>
                            <p className="feature-text">Utilizing locally sourced and sustainable ingredients, Olaf Chefs don't produce unnecessary waste, unlike the big restaurant chains.</p><br />
                        </div>

                    </div>

                </div>

                <div id="contact" className="contact">

                    <div className="fixed-background">

                        <div className="row dark justify-content-center contact-info">

                            <div className="col-md-5 text-center">

                                <div className="col-12">
                                    <h3 className="heading">Contact Us</h3>
                                    <div className="heading-underline"></div>
                                </div>
                                
                                    <p>We want to hear from you!<br />
                                        If you have any questions, comments, concerns, or would like
                                        additional information on how to become licensed as a Olaf Chef
                                 feel free to contact us using the information provided below.<br />
                                        Our team is ready and willing to help.<br />
                                        Happy Cooking!</p>
                                    <br />
                                    <br />

                                    <strong>Email: service@olafgo.com</strong><br />
                                    <strong>Phone: (206) 555-5555</strong>
                                </div>


                            <hr className="socket" />
                            <div className="copyright">OlafGo &copy; Copyright 2019</div>
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