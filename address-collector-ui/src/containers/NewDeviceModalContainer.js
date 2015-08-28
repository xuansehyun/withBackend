import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  createDeviceName,
} from "../api/BackendAPI";

import {default as NewModal} from "../components/NewModal";

export default class NewDeviceModalContainer extends Component {

  static propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    onDeviceCreated: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  handleSubmit = (newDeviceName) => {
    createDeviceName(newDeviceName).then(({data: newDeviceNameFromServer}) => {
      this.props.onDeviceCreated(newDeviceNameFromServer);
    });
  }

  render () {
    return (
      <NewModal
        onRequestClose={this.props.onRequestClose}
        hintText="Enter new device name"
        onSubmit={this.handleSubmit}
      />
    );
  }
}
