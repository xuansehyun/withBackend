import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  SelectField,
  TextField,
  FlatButton,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  "flex-flow": "column nowrap",
};

const rowStyle = {
  flex: "0 1 auto",
  //-webkit-flex: "0 1 auto",
  "align-self": "center",
};

const columnContainerStyle = {
  display: "flex",
  "flex-flow": "row nowrap",
};

const columnStyle = {
  flex: "0 1 auto",
  //-webkit-flex: "0 1 auto",
};

const submitInputStyle = {
  cursor: "pointer",
  position: "absolute",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",
  width: "100%",
  opacity: "0"
};

export default class Stage2 extends Component {

  static propTypes = {
    manufactures: PropTypes.array.isRequired,
    devices: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    onHelpWithMacAddress: PropTypes.func.isRequired,
    onNewDevice: PropTypes.func.isRequired,
    onNewManufacture: PropTypes.func.isRequired,
  }

  state = {
    deviceObj: {
    },
  }

  handleChange = (key, e) => {
    this.setState({
      deviceObj: {
        ...this.state.deviceObj,
        [key]: e.target.value,
      },
    });
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.deviceObj);
  }
  render () {
    const manufactureItems = this.props.manufactures.map(it => ({text: it}));
    const deviceItems = this.props.devices.map(it => ({text: it}));
    const countryItems = this.props.countries.map(it => ({text: it}));

    const {deviceObj} = this.state;
    const {errors} = this.props;

    return (
      <div style = {rowContainerStyle}>
        <div style = {{...rowStyle, ...columnContainerStyle}}>
        <SelectField
          value={deviceObj.manufacture}
          valueMember="text"
          onChange={this.handleChange.bind(this, "manufacture")}
          errorText={errors.manufacture}
          hintText="Select A Manufacture"
          menuItems={manufactureItems}
        />
        <FlatButton
          label= "Add New"
          onClick={this.props.onNewManufacture}
        />
        </div>
        <div style = {{...rowStyle, ...columnContainerStyle}}>
        <SelectField
          value={deviceObj.device}
          valueMember="text"
          onChange={this.handleChange.bind(this, "device")}
          errorText={errors.device}
          hintText="Select A Device"
          menuItems={deviceItems}
        />
        <FlatButton
          label= "Add New"
          onClick={this.props.onNewDevice}
        />
        </div>
        <div style = {{...rowStyle, ...columnContainerStyle}}>
        <TextField
          value={deviceObj.macAddress}
          onChange={this.handleChange.bind(this, "macAddress")}
          errorText={errors.macAddress}
          hintText="Please enter your MAC address"
        />
        <FlatButton
          label= "Help"
          onClick={this.props.onHelpWithMacAddress}
        />
        </div>

        <div style = {rowStyle}>
        <SelectField
          value={deviceObj.country}
          valueMember="text"
          onChange={this.handleChange.bind(this, "country")}
          errorText={errors.country}
          hintText="Select Your Country"
          menuItems={countryItems}
        />
        <FlatButton
          label = ""
        />
        </div>
      
        <div style = {rowStyle}>
        <FlatButton
          primary={true}
          label="Submit"
          onClick={this.handleSubmit}
        />
        </div>
      </div>
    );
  }
}
