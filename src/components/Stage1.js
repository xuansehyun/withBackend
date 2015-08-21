import {
  default as React,
  Component, 
  PropTypes,
} from "react";

import {
  FlatButton,
} from "material-ui";

export default class Stage1 extends Component {
 
//check for func 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
  } 
  render () {
    return (
      <FlatButton
       label="Add A New Device"
       primary={true}
       onClick={this.props.onAddClicked}
      />

    );
  }  
}
