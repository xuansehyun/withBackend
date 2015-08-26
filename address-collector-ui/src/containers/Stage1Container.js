import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {default as Stage1} from "../components/Stage1";

export default class Stage1Container extends Component {

//event for clicking 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  render () {
    return (
      <Stage1
        onAddClicked={this.props.onAddClicked}
      />
    );
  }
}
