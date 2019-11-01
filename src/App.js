import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Chef from "./components/pages/Chef/Chef";
import User from "./components/pages/User/User";
import UserLogIn from "./components/pages/UserForm/UserForm"
import NoMatch from "./components/pages/NoMatch";

function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chef" component={Chef} />
          <Route exact path="/user" component={User} />
          <Route exact path="/signup/user" component={UserForm} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
