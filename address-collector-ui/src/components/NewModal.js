import {
  defualt as React,
  Component,
  PropTypes,
} from "react";

import {default as ReactModal} from "react-modal";

import {
  TextField,
  FlatButton,
} from "material-ui";

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
        <TextField
          ref="text"
          hintText={this.props.hintText}
        />
        <FlatButton
          label="Submit"
          onClick={this.handleSubmit}
        />
      </ReactModal>
    );
  }
}
