import {
  default as React,
  Component,
  PropTypes,
} from "react";

//import from material-ui
import {
  CircularProgress,
} from "material-ui";

export default class Stage0 extends Component {

  render () {
    return (
      <CircularProgress mode="indeterminate" />
    );
  }
}
