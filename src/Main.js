import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Connect from "./Connect";
import Account from "./Account";
import logo from './logo.png';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <img src={logo}/><h1>Nomad VPN</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/connect">Connect</NavLink></li>
            <li><NavLink to="/account">Account</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/connect" component={Connect}/>
            <Route path="/account" component={Account}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;