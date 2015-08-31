import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {default as ReactModal} from "react-modal";

import {
  RaisedButton,
  TextField,
  FlatButton,
  FontIcon,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  alignContent: "center",
};

const rowStyle = {
  flex: "0 1 auto",
  alignSelf: "center",
};

const columnContainerStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  alignContent: "center",
};

export default class NewModal extends Component {

  static propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    hintText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }
  
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.refs.text.getValue());
  }

  render () {
    return (
      <ReactModal
        isOpen={true}
        onRequestClose={this.props.onRequestClose}
      >
        <div style = {rowContainerStyle}>
        <div style = {{...rowStyle, ...columnContainerStyle}}>
        <TextField
          ref="text"
          hintText={this.props.hintText}
        />
        <RaisedButton
          primary={true}
          label="Submit"
          labelStyle={{padding: "16px 8px"}}
          onClick={this.handleSubmit}
        >
          <FontIcon
           className="material-icons"
           color = {"#7e7e7e"}
           style={{float: "left", lineHeight: "36px", maxWidth: "20px" }}
          >check_circle
          </FontIcon>
        </RaisedButton>
        
        <RaisedButton
          secondary={true}
          label="Back"
          onClick={this.props.onRequestClose}
        >
          <FontIcon
           className="material-icons"
           color = {"#7e7e7e"}
           style={{float: "left", lineHeight: "36px", maxWidth: "20px" }}
          >arrow_back
          </FontIcon>
        </RaisedButton>
        </div>
        </div>
      </ReactModal>
    );
  }
}
