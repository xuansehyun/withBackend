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
  flexFlow: "column nowrap",
};

const rowStyle = {
  flex: "0 1 auto",
  alignSelf: "center",
};

export default class InitializeStage extends Component {

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
