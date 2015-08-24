import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  createDevice,
} from "../api/BackendAPI";

import {default as Stage2} from "../components/Stage2";

export default class Stage2Container extends Component {

  static propTypes = {
    manufactures: PropTypes.array.isRequired,
    devices: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }
 
  state = {
    errors: {
    },
  }

  validateAndSubmit = (deviceObj) => {
    const {manufacture, device, macAdress, country} = deviceObj;
    // validation process
    const errors = {};
    // length not match 12
    // length 0
  }


  render () {
    return (
      <Stage2
        manufactures={this.props.manufactures}
        devices={this.props.devices}
        countries={this.props.countries}
        errors={this.state.errors}
      />
    );
  }
}
