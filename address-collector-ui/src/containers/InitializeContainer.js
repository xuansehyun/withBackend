import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  manufactureList,
  deviceList,
} from "../api/BackendAPI";

import {default as InitializeStage} from "../components/InitializeStage";

export default class InitializeContainer extends Component {

  static propTypes = {
    onDataLoaded: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }
//After loading data, call setState to go to page1
  componentDidMount () {
    Promise.all([
      manufactureList(),
      deviceList(),
    ]).then(([manufactures, devices]) => {
      this.props.onDataLoaded({
        manufactures,
        devices,
      });
    });
  }

  render () {
    return (
      <InitializeStage />
    );
  }
}
