import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  FontIcon,
  SelectField,
  TextField,
  FlatButton,
  RaisedButton,
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

const columnStyle = {
  flex: "0 1 auto",
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
    deviceObj: PropTypes.object.isRequired,
    onDeviceKeyValueChange: PropTypes.func.isRequired,
  }

  handleChange = (key, e) => {
    this.props.onDeviceKeyValueChange(key, e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  }
  render () {
    const manufactureItems = this.props.manufactures.map(it => ({text: it}));
    const deviceItems = this.props.devices.map(it => ({text: it}));
    const countryItems = this.props.countries.map(it => ({text: it}));

    const {deviceObj, errors} = this.props;

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
            label= "Add New" secondary={true}
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
            label= "Add New" secondary={true}
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
            label= "Help" secondary={true}  
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
         
        <div style = {{...rowStyle, ...columnContainerStyle}}>
          <RaisedButton linkButton={true} href="http://localhost:8080"
            secondary={true} >
            <FontIcon className="material-icons">home</FontIcon>HOME
          </RaisedButton>
          <RaisedButton
            primary={true}
            label="Submit"
            onClick={this.handleSubmit}
          />
        </div>

      </div>
    );
  }
}
