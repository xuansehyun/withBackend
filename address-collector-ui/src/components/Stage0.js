import {
  default as React,
  Component,
  PropTypes,
} from "react";

//import from material-ui
import {
  CircularProgress,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  "flex-flow": "column nowrap",
};

const rowStyle = {
  flex: "0 1 auto",
  "align-self": "center",
};

export default class Stage0 extends Component {

  render () {
    return (
      <div style = {rowContainerStyle}>
        <div style = {rowStyle}>
          <CircularProgress mode="indeterminate" />
        </div>
      </div>
    );
  }
}
