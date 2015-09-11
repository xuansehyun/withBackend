import {
  default as React,
  Component, 
  PropTypes,
} from "react";

import {
  RaisedButton,
  FontIcon,
  TextField,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  flexFlow: "column nowrap",
};

const columnContainerStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
};

const rowStyle = {
  flex: "0 1 auto",
  alignSelf: "center",
};

const columnStyle = {
  flex: "0 1 auto",
};

const buttonStyle = {
  margin: "10px",
};

export default class MainPage extends Component {
 
//check for func 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
    onShowData: PropTypes.func.isRequired,
  } 
  render () {
    return (
      <div style = {rowContainerStyle}>
        <div style = {{...rowStyle, ...columnContainerStyle}}>  
          <RaisedButton
            style={{ ...columnStyle, ...buttonStyle}}
            label="Add A New Device"
            labelStyle={{padding: "16px 8px"}}
            primary={true}
            onClick={this.props.onAddClicked}
          >
            <FontIcon
              className="material-icons"
              color={"#ffffff"}
              style={{float: "left", lineHeight: "36px"}}
            >smartphone
            </FontIcon>
          </RaisedButton>
        
        </div>
      </div>
    );
  }  
}
