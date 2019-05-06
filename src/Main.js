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
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled.img`
  width: 100px;
  height: auto;
`;
const TaskBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`
const TaskBarLinks = styled.li`
  float: left;
`
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  ${TaskBarLinks}:hover & {
    background-color: #111;
  }
`;

class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div class="holder">
              <h2><Logo src={logo}/>Nomad VPN</h2>
            </div>
            <TaskBar className="header">
              <TaskBarLinks><StyledLink exact to="/">Home</StyledLink></TaskBarLinks>
              <TaskBarLinks><StyledLink to="/connect">Connect</StyledLink></TaskBarLinks>
              <TaskBarLinks><StyledLink to="/account">Account</StyledLink></TaskBarLinks>
            </TaskBar>
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