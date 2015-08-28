import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  createManufactureName,
} from "../api/BackendAPI";

import {default as NewModal} from "../components/NewModal";

export default class NewManufactureModalContainer extends Component {

  static propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    onManufactureCreated: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  handleSubmit = (newManufactureName) => {
    createManufactureName(newManufactureName).then(({data: newManufactureNameFromServer}) => {
      this.props.onManufactureCreated(newManufactureNameFromServer);
    });
  }

  render () {
    return (
      <NewModal
        onRequestClose={this.props.onRequestClose}
        hintText="Enter new manufacture name"
        onSubmit={this.handleSubmit}
      />
    );
  }
}
