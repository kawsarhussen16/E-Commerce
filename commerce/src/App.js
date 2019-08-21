import React, { Component } from "react";

import Homepage from "./pages/homepage/homepage.js";
import ShopPage from "./pages/shop-page/shop.js";
import Header from "./components/header/header.js";
import SignInUP from "./pages/signIn&up/signIn-Up";
import { auth } from "./firebase/firebase.js";

import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: ""
    };
  }
  SignOutFromAuth = null;

  componentDidMount() {
    this.SignOutFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.SignOutFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUP} />
        </Switch>
      </div>
    );
  }
}

export default App;