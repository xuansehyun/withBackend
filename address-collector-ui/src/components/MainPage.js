import {
  default as React,
  Component, 
  PropTypes,
} from "react";

import {
  RaisedButton,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  flexFlow: "column nowrap",
};

const rowStyle = {
  flex: "0 1 auto",
  alignSelf: "center",
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
     // <ReactGridLayout className="layout" layout={layout}
       // cols={12} rowHeight={30}>
       // <div keys={1}>
      <div style = {rowContainerStyle}>
        <div style = {rowStyle}>
          <RaisedButton
            style={buttonStyle}
            label="Add A New Device"
            primary={true}
            onClick={this.props.onAddClicked}
          />
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
