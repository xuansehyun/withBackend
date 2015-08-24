import {
  parse as parseUrl,
} from "url";

import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  AppBar,
} from "material-ui";

import {default as Stage0Container} from "./Stage0Container";
import {default as Stage1Container} from "./Stage1Container";
import {default as Stage2Container} from "./Stage2Container";

require("normalize.css");

const containerByStage = {
  0: Stage0Container,
  1: Stage1Container,
  2: Stage2Container,
};

const COUNTRY_LIST = [
  "Japan",
  "France",
  "Heaven",
];

export default class WizardContainer extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  state = {
    stage: 0,
    manufactures: null,
    devices: null,
  }
 
  handleDataLoaded = ( {manufactures, devices}) => {
    this.setState({
        stage: 1, 
        manufactures,
        devices,
    });
  }

  handleAddClicked = () => {
    this.setState({
      stage: 2,
    });
  }

  handleDeviceCreated = (deviceObjFromServer) => {
    console.log("Created!", deviceObjFromServer);

    this.setState({
      stage: 1,
    });
  }  
  render () {
    const Component = containerByStage[this.state.stage] || Stage0Container;

    return (
      <div id="react-root">
        <AppBar
          title="(Locarise Logo)"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Component
          onDataLoaded={this.handleDataLoaded}
          onAddClicked={this.handleAddClicked}
          manufactures={this.state.manufactures}
          countries={COUNTRY_LIST}
          devices={this.state.devices}
        />
      </div>
    );
  }
}
