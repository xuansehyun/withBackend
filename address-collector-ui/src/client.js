const Debug = require("debug");

import {
  default as React,
} from "react";

import {default as injectTapEventPlugin} from "react-tap-event-plugin";
import {default as ReactModal} from "react-modal";
import {default as Root} from "./Root";

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const container = document.getElementById("react-container");

ReactModal.setAppElement(container);
ReactModal.injectCSS();

React.render(<Root />, container);

Debug.enable("ReactRootContainer");
