import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Chef from "./components/pages/Chef";
import User from "./components/pages/User";
import NoMatch from "./components/pages/NoMatch";

function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/chef" component={Chef} />
          <Route exact path="/user" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
