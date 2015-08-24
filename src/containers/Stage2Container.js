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
    countries: PropTypes.array.isRequired,
    onDeviceCreated: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }
 
  state = {
    errors: {
    },
  }

  validateAndSubmit = (deviceObj) => {
    const {manufacture, device, macAddress, country} = deviceObj;
    // validation process
    const errors = {};
    if (12 !== macAddress.length) {
      errors.macAddress = "Length not matched!";
    }
  
    this.setState({
      errors,
    });
    //if no error detected, go on
    if (0 === Object.keys(errors).length) {
      this.createDeviceToServer(deviceObj);
    }
  }

  createDeviceToServer (deviceObj) { 
    return createDevice(deviceObj).then((deviceObjFromServer) => {
      this.props.onDeviceCreated(deviceObjFromServer);
    }).catch((errorsFromServer) => {
      this.setState({
        errors: errorsFromServer,
      });
    });
  }

  render () {
    return (
      <Stage2
        manufactures={this.props.manufactures}
        devices={this.props.devices}
        countries={this.props.countries}
        onSubmit={this.validateAndSubmit}
        errors={this.state.errors}
      />
    );
  }
}
