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

//var ReactGridLayout = require( 'react-grid-layout');

export default class MainPage extends Component {
 
//check for func 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
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
            label="Add A New Device"
            primary={true}
            onClick={this.props.onAddClicked}
          />
        </div>
      </div>
      //</div>
      //</ReactGridLayout>
    );
  }  
}
