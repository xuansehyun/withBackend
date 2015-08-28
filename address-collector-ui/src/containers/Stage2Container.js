import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  createDevice,
} from "../api/BackendAPI";

import {default as Stage2} from "../components/Stage2";
import {default as NewManufactureModalContainer} from "./NewManufactureModalContainer";
import {default as NewDeviceModalContainer} from "./NewDeviceModalContainer";
import {default as HelpModal} from "../components/HelpModal";

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
    ModalContainer: null,
    manufacturesOverrode: null,
    devicesOverrode: null,
  }

  handleNewManufacture = () => {
    this.setState({
      ModalContainer: NewManufactureModalContainer,
    });
  }

  handleNewDevice = () => {
    this.setState({
      ModalContainer: NewDeviceModalContainer,
    });
  }

  handleHelpWithMacAddress = () => {
    this.setState({
      ModalContainer: HelpModal,
    });
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

  handleRequestClose = () => {
    this.setState({
      ModalContainer: null,
    });
  }

  handleManufactureCreated = (newManufactureName) => {
    this.setState({
      deviceObj: {
        ...this.state.deviceObj,
        manufacture: newManufactureName,
      },
      ModalContainer: null,
      manufacturesOverrode: [newManufactureName].concat(this.props.manufactures),
    });
  }

  handleDeviceCreated = (newDeviceName) => {
    this.setState({
      deviceObj: {
        ...this.state.deviceObj,
        device: newDeviceName,
      },
      ModalContainer: null,
      devicesOverrode: [newDeviceName].concat(this.props.devices),
    });
  }

  render () {
     const {ModalContainer} = this.state;
    let modal;
    if (ModalContainer) {
      modal = (
        <ModalContainer
          onRequestClose={this.handleRequestClose}
          onManufactureCreated={this.handleManufactureCreated}
          onDeviceCreated={this.handleDeviceCreated}
        />
      );
    }

    return (
      <Stage2
        manufactures={this.state.manufacturesOverrode || this.props.manufactures}
        devices={this.state.devicesOverrode || this.props.devices}
        countries={this.props.countries}
        onSubmit={this.validateAndSubmit}
        errors={this.state.errors}
        onNewManufacture={this.handleNewManufacture}
        onNewDevice={this.handleNewDevice}
        onHelpWithMacAddress={this.handleHelpWithMacAddress}
      />
    );
  }
}
