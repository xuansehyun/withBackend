import {
  default as React,
  Component, 
  PropTypes,
} from "react";

import {
  RaisedButton,
  FontIcon,
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

//var ReactGridLayout = require( 'react-grid-layout');

export default class MainPage extends Component {
 
//check for func 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
    onShowData: PropTypes.func.isRequired,
  } 
  render () {
    //var layout = getOrGenerateLayout();
    return (
      //<ReactGridLayout className="layout" 
      //   cols={12} rowHeight={30}>
      //  <div key={1} _grid={{x:4, y:6, w:5, h:6}}>
      <div style = {rowContainerStyle}>
        <div style = {{...rowStyle, ...columnContainerStyle}}>  
          <RaisedButton
            style={{ ...columnStyle, ...buttonStyle}}
            label="Add A New Device"
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
        
          <RaisedButton
            label="Show Data"
            secondary={true}
            onClick={this.props.onShowData}
          />
        </div>
      </div>
      //</div>
      //</ReactGridLayout>
    );
  }  
}
