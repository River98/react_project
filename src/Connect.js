import React from "react";
import styled from 'styled-components';

const Selection = styled.select`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  padding: 0px 20px;
`;
const SelectionOptions = styled.option`
  color: palevioletred;
  font-size: 1em;
`;
const Descriptions = styled.p`
  color: #b4f4ff;
  font-size: 1em;
`
const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

class Connect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Please Confirm'};
    this.ip = {value: '000.000.000.000'};
    this.ms = {value: '0'};
    this.location = {value: 'Unknown'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value == 'New York') {
      this.ip.value = "111.111.111.111"
      this.ms.value = "1"
      this.location.value = "United States"
    } else if (this.state.value == 'California') {
      this.ip.value = "222.222.222.222"
      this.ms.value = "2"
      this.location.value = "United States"
    } else if (this.state.value == 'London') {
      this.ip.value = "333.333.333.333"
      this.ms.value = "3"
      this.location.value = "United Kingdom"
    } else if (this.state.value == 'Seoul') {
      this.ip.value = "444.444.444.444"
      this.ms.value = "4"
      this.location.value = "Korea"
    } else if (this.state.value == 'Beijing') {
      this.ip.value = "555.555.555.555"
      this.ms.value = "5"
      this.location.value = "China"
    } else if (this.state.value == 'Tokyo') {
      this.ip.value = "666.666.666.666"
      this.ms.value = "6"
      this.location.value = "Japan"
    }
    document.getElementById("ip").innerHTML = this.ip.value;
    document.getElementById("ms").innerHTML = this.ms.value;
    document.getElementById("location").innerHTML = this.location.value;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h2>Choose a Location</h2><br></br><br></br>
        <Selection value={this.state.value} onChange={this.handleChange}>
          <SelectionOptions value="New York">New York</SelectionOptions>
          <SelectionOptions value="California">California</SelectionOptions>
          <SelectionOptions value="London">London</SelectionOptions>
          <SelectionOptions value="Seoul">Seoul</SelectionOptions>
          <SelectionOptions value="Beijing">Beijing</SelectionOptions>
          <SelectionOptions value="Tokyo">Tokyo</SelectionOptions>
        </Selection><br></br><br></br><br></br>
        <Button class="button" type="submit" value="Submit">Submit</Button>
        </form><br></br><br></br>

        <h2>Server details</h2>
        <h4>IP</h4><Descriptions id="ip"></Descriptions>
        <h4>MS</h4><Descriptions id="ms"></Descriptions>
        <h4>Location</h4><Descriptions id="location"></Descriptions>
      </div>
    );
  }
}
 
export default Connect;