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
    manufactureId: PropTypes.string.isRequired,
    onDeviceCreated: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  handleSubmit = (newDeviceName) => {
    createDeviceName(this.props.manufactureId, newDeviceName).then((data) => {
      this.props.onDeviceCreated(data);
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
