import React, { Component } from "react";
import styled from 'styled-components';

const Input = styled.input`
  color: palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #ffffff;
  border: 2px solid palevioletred};
`;

const Button = styled.input`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #ffffff;
  &:hover {
    background-color: rgb(200,200,200);
  }

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const Confirmation = styled.p`
  color: palevioletred;
  font-size: 1em;
`;

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}
 
class Account extends Component {
  constructor(props) {
    super(props);
    this.confirmation = {value: ''};
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (document.getElementById("Username").value === 'user' 
    && document.getElementById("Password").value === 'pass') {
      this.confirmation.value = "Login Successful"
      document.getElementById("confirmation").innerHTML = this.confirmation.value;
    } else {
      this.confirmation.value = "Login Invalid";
      document.getElementById("confirmation").innerHTML = this.confirmation.value;
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <h5>Username</h5> <Input ref={this.inputRef1} onMouseEnter={() => {this.inputRef1.current.focus()}} id="Username" type="textbox"></Input>
          <h5>Password</h5> <Input ref={this.inputRef2} onMouseEnter={() => {this.inputRef2.current.focus()}} id="Password" type="textbox"></Input><br></br><br></br>
          <Button class="button" type="submit" value="Login"></Button>
        </form>

        <Confirmation id="confirmation"></Confirmation>
      </div>
    );
  }
}
 
export default Account;