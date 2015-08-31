import {
  default as React, 
  Component,
  PropTypes,
} from "react";

import {default as ReactModal} from "react-modal";

export default class HelpModal extends Component {

  static propTypes = {
    onRequestClose: PropTypes.func.isRequired,
  }
  
  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  render() {
    return (  
      <ReactModal
        isOpen={true}
        onRequestClose={this.props.onRequestClose}
      > 
        Some help text to find Mac address here
      </ReactModal>
    );
  }
}
