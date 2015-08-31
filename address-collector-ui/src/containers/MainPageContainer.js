import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {default as MainPage} from "../components/MainPage";

export default class MainPageContainer extends Component {

//event for clicking 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  render () {
    return (
      <MainPage
        onAddClicked={this.props.onAddClicked}
      />
    );
  }
}
