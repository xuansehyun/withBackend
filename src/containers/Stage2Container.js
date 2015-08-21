import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  //get the "createDivice" part from API
} from "../api/BackendAPI";

import {default as Stage2} from "../components/Stage2";

export default class Stage2Container extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object,
  }
  
  render () {
    return (
      <Stage2
        manufactures={this.props.manufactures}
        devices={this.props.devices}
      />
    );
  }
}
