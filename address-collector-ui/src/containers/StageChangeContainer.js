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

import {default as InitializeContainer} from "./InitializeContainer";
import {default as MainPageContainer} from "./MainPageContainer";
import {default as CollectDataStageContainer} from "./CollectDataStageContainer";

require("normalize.css");

const containerByStage = {
  0: InitializeContainer,
  1: MainPageContainer,
  2: CollectDataStageContainer,
};
var country_list = require( 'iso-3166-country-list');
const COUNTRY_LIST =
  country_list.names;

const STORE_LIST = [
  "BC",
  "LB",
  "AP",
];
export default class StageChangeContainer extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  state = {
    stage: 0,
    manufactures: null,
    devices: null,
  }
 
  handleDataLoaded = ({manufactures,devices}) => {
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

  handleHome = () => {
    this.setState({
      stage: 1,
    });
  }

  handleDeviceCreated = (deviceObjFromServer) => {
    console.log("Created!", deviceObjFromServer);

    this.setState({
      stage: 1,
    });
  }  
  render () {
    const Component = containerByStage[this.state.stage] || InitializeContainer;

    const contentStyle = {
      minHeight: "500px",
      margin: "30px 0",
      fontSize: "5px",
    }

    const footerStyle = {
      padding: "40px 20px",
      backgroundColor: "#ffffff",
      color: "#000000",
      textAlign: "center",
      fontSize: "10px",
    }

    const linkStyle = {
      color: "#000000",
    }

    return (
      <div id="react-root">
        <AppBar
          //title="(Locarise Logo)"
          style = {{backgroundColor: "#2F4050"}}
          title = {
            <img 
              style={{height: "60px"}}
              src={require("../images/logo_locarise_inline_retina.png")}
            />
          }
          showMenuIconButton = {false}
        />
        <div style={contentStyle}>
          <Component
            onDataLoaded={this.handleDataLoaded}
            onAddClicked={this.handleAddClicked}
            manufactures={this.state.manufactures}
            countries={COUNTRY_LIST}
            stores={STORE_LIST}
            devices={this.state.devices}
            onDeviceCreated={this.handleDeviceCreated}
            onHome={this.handleHome}
          />
        </div>
        <div style={footerStyle}>
          <p>© 2012-2015 Locarise, Pte Ltd. All rights reserved.</p>
          <a href="https://www.google.com" target="_blank" style={linkStyle}>A</a>
        </div>
      </div>
    );
  }
}
