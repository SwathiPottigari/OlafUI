import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Chef from "./components/pages/Chef/Chef";
import User from "./components/pages/User/User";
import UserForm from "./components/pages/UserForm/UserForm";
import ChefForm from "./components/pages/ChefForm/ChefForm";
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart';
import NoMatch from "./components/pages/NoMatch";



export default class App extends Component {

  state = {
    storeCart:null
  }


  setStoreCart = (val) => {
    console.log("This is the Apps store");
    console.log(val);
    this.setState({
      storeCart: val
    })

  }

  render() {
    // console.log("In APP store", this.state.storeCart)
    return (
      <div className="App">

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chef" component={Chef} />
            <Route exact path="/user">
              <User storeContent={this.setStoreCart} />
            </Route>

            <Route exact path="/signup/user" component={UserForm} />
            <Route exact path="/signup/chef" component={ChefForm} />
            <Route exact path="/cart">
              <ShoppingCart cartItems = {this.state.storeCart}/>
            </Route>
      
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    )
  }
}
/* 
function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chef" component={Chef} />
          <Route exact path="/user" component={User} />
          <Route exact path="/signup/user" component={UserForm} />
          <Route exact path="/signup/chef" component={ChefForm} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
 */
//App.js