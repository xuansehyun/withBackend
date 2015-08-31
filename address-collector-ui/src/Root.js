import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  Styles
} from "material-ui";
const {ThemeManager, Colors} = Styles;

import {default as StageChangeContainer} from "./containers/StageChangeContainer";

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
      accent1Color: Colors.cyan500,
      primary1Color: Colors.grey200,
    });
    this.themeManager.setComponentThemes({
      flatButton: {
        textColor: Colors.cyan500,
        primaryTextColor: Colors.cyan500,
        //color: Colors.grey900,
      },
      button: {
        height: 40,
      }
    });
  }

  render () {
    return (
      <StageChangeContainer />
    );
  }
}
