import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  Styles
} from "material-ui";
const {ThemeManager, Colors} = Styles;

import {default as WizardContainer} from "./containers/WizardContainer";

export default class Root extends Component {

  static childContextTypes = {
    muiTheme: PropTypes.object,
  }

  getChildContext () {
    return {
      muiTheme: this.themeManager.getCurrentTheme(),
    };
  }

  componentWillMount () {
    this.themeManager = new ThemeManager();
    this.themeManager.setPalette({
      accent1Color: Colors.deepOrange500,
    });
  }

  render () {
    return (
      <WizardContainer />
    );
  }
}
