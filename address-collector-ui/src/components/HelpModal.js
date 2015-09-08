import {
  default as React, 
  Component,
  PropTypes,
} from "react";

import {default as ReactModal} from "react-modal";
import {
  Tabs,
  Tab,
  IconButton,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  alignContent: "center",
};

const rowStyle = {
  flex: "0 1 auto",
  alignSelf: "center",
};

const columnContainerStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
};

export default class HelpModal extends Component {

  static propTypes = {
    onRequestClose: PropTypes.func.isRequired,
  }
  
  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  render() {
    return (  
      <ReactModal
        isOpen={true}
        onRequestClose={this.props.onRequestClose}
      >
        <IconButton
          onClick={this.props.onRequestClose}
          iconClassName="material-icons"
          color = {"#7e7e7e"}
          >home
        </IconButton>
   
        <Tabs>
          <Tab label = "iOS Devices" >
          <div style = {rowContainerStyle}>
          <div style = {{...rowStyle, ...columnContainerStyle}}>
          <img
              style={{height: "280px"}}
              src={require("../images/help_ios.png")}
            />
          </div>
          </div>
          
          <div style = {rowContainerStyle}>
          <div style = {{...rowStyle, ...columnContainerStyle}}>
          Settings -> General -> Usage -> Wi-Fi Address
          </div>
          </div>
          </Tab>
          
          <Tab label = "Android Devices" >
          222
          </Tab>
        </Tabs>
      </ReactModal>
    );
  }
}
