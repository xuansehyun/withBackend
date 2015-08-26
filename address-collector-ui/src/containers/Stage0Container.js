import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  manufactureList,
  deviceList,
} from "../api/BackendAPI";

import {default as Stage0} from "../components/Stage0";

export default class Stage0Container extends Component {

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
    ]).then(([{data: manufactures}, {data: devices}]) => {
      this.props.onDataLoaded({
        manufactures,
        devices,
      });
    });
  }

  render () {
    return (
      <Stage0 />
    );
  }
}
