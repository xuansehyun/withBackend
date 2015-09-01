import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {default as MainPage} from "../components/MainPage";
import {default as DataModal} from "../components/DataModal";

export default class MainPageContainer extends Component {

//event for clicking 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object,
  }

  state = {
    errors: {
    },
    ModalContainer: null,
  }

  handleDataLoaded = () => {
    this.setState({
      ModalContainer: DataModal,
    });
  }

  handleRequestClose = () => {
    this.setState({
      ModalContainer: null,
    });
  }

  render () {
      const {ModalContainer} = this.state;
    let modal;
    if (ModalContainer) {
      modal = (
        <ModalContainer
          onRequestClose={this.handleRequestClose}
        />
      );
    }

    return (
      <div>
      <MainPage
        onAddClicked={this.props.onAddClicked}
        onShowData={this.handleDataLoaded}
      />
      {modal}
      </div>
    );
  }
}
