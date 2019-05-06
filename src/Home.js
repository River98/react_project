import React, { Component } from "react";
import styled from "styled-components";

const Intro = styled.h5`
  color: palevioletred;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #ffffff;
  border: 2px solid palevioletred};
  line-height: 30px;
`;
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Be a Nomad but Stay Connected</h2>
        <Intro>
          Our VPN service was created to be widely available for
          all of our users while still keeping everyone as secure as can be.
          To do this, we had to take out a few options that other VPN services provided
          therefore eliminating large user-error cases without sacrificing what users want
          from a typical service. Use our servers to play games, watch movies,
          and enjoy the internet without worrying about security or region restrictions.
        </Intro>
      </div>
    );
  }
}
 
export default Home;