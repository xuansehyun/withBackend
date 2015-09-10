import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  createDeviceObject,
} from "../api/BackendAPI";

import {default as CollectDataStage} from "../components/CollectDataStage";
import {default as NewManufactureModalContainer} from "./NewManufactureModalContainer";
import {default as NewDeviceModalContainer} from "./NewDeviceModalContainer";
import {default as HelpModal} from "../components/HelpModal";

const MAC_ADDRESS_REGEXP = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;

const STORAGE_KEY = "myDeviceList";

export default class CollectDataStageContainer extends Component {

  static propTypes = {
    //manufactures: PropTypes.array.isRequired,
    //devices: PropTypes.array.isRequired,
    stores: PropTypes.array.isRequired,
    brandDeviceList: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    onDeviceCreated: PropTypes.func.isRequired,
    onHome: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }
 
  state = {
    deviceObj: {
      country: window.localStorage.getItem("country"),
      manufacture: window.localStorage.getItem("manufacture"),
    },
    errors: {
    },
    ModalContainer: null,
    manufacturesOverrode: [],
    devicesOverrode: [],
  }

  handleDeviceKeyValueChange = (key, value) => {
    this.setState({
      deviceObj: {
        ...this.state.deviceObj,
        [key]: value,
      },
    });
  }

  handleCheckAddress = (key, value) => {
    const errors = {};
    if (!MAC_ADDRESS_REGEXP.test(value)) {
          errors.macAddress = "Incorrect Mac Address format!";
      }
    else {
      errors.macAddress = "Valid Mac Address";
    }
    this.setState({
        errors,
    });
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
  validateAndSubmit = () => {
    const {manufacture, device, macAddress, country, store} = this.state.deviceObj;
    // validation process
    const errors = {};
    if (!MAC_ADDRESS_REGEXP.test(macAddress)) {
      errors.macAddress = "Incorrect Mac Address format!";
    }
    if (!manufacture) {
      errors.manufacture = "Please Select A Manufacture!";
    }
    if (!device) {
      errors.device = "Please Select A Device!";
    }
    if (!country) {
      errors.country = "Please Select A Country!";
    }
    var value = [manufacture, device, macAddress, country];
 
    this.setState({
      errors,
    });
    //if no error detected, go on
    if (0 === Object.keys(errors).length) {
      this.saveCountryToLocalStorage(country);
      this.saveManufactureToLocalStorage (manufacture);
      this.appendToLocalStorage();
      this.createDeviceToServer();
    }
  }

  readFromLocalStorage () {
    const stringifiedList = window.localStorage.getItem(STORAGE_KEY);
    return stringifiedList ? JSON.parse(stringifiedList) : [];
  }

  appendToLocalStorage () {
    const currentList = this.readFromLocalStorage();
    currentList.push(this.state.deviceObj);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentList));
  }

  saveManufactureToLocalStorage (manufacture) {
    window.localStorage.setItem("manufacture", manufacture);
  }

  saveCountryToLocalStorage (country) {
    window.localStorage.setItem("country", country);
  }

  createDeviceToServer () { 
    return createDeviceObject(this.state.deviceObj).then((deviceObjFromServer) => {
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
      manufacturesOverrode: [newManufactureName],
    });
  }

  handleDeviceCreated = (newDeviceName) => {
    this.setState({
      deviceObj: {
        ...this.state.deviceObj,
        device: newDeviceName,
      },
      ModalContainer: null,
      devicesOverrode: [newDeviceName],
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

    const {brandDeviceList} = this.props;

    const selectedBrand = brandDeviceList
      .filter(({id}) => `${ id }` === this.state.deviceObj.manufacture) [0];
    const devices = selectedBrand ? selectedBrand.devices : [];

    return (
      <div>
      <CollectDataStage
        stores={this.props.stores}
        manufactures={this.state.manufacturesOverrode.concat(brandDeviceList)}
        devices={this.state.devicesOverrode.concat(devices)}
        countries={this.props.countries}
        onSubmit={this.validateAndSubmit}
        errors={this.state.errors}
        onNewManufacture={this.handleNewManufacture}
        onNewDevice={this.handleNewDevice}
        onHelpWithMacAddress={this.handleHelpWithMacAddress}
        onDeviceKeyValueChange={this.handleDeviceKeyValueChange}
        deviceObj={this.state.deviceObj}
        onCheckAddress={this.handleCheckAddress}
        onHome={this.props.onHome}
      />
      {modal}
      </div>
    );
  }
}
