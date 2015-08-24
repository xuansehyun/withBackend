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
    errors: PropTypes.object.isRequired,
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


  render () {
    const manufactureItems = this.props.manufactures.map(it => ({text: it}));
    const deviceItems = this.props.devices.map(it => ({text: it}));
    const countryItems = this.props.countries.map(it => ({text: it}));

    const {deviceObj} = this.state;
    const {errors} = this.props;

    return (
      <div>
        <SelectField
          value={deviceObj.manufacture}
          valueMember="text"
          onChange={this.handleChange.bind(this, "manufacture")}
          errorText={errors.manufacture}
          menuItems={manufactureItems}
        />
        <SelectField
          value={deviceObj.device}
          valueMember="text"
          onChange={this.handleChange.bind(this, "device")}
          errorText={errors.device}
          menuItems={deviceItems}
        />
        <TextField
          value={deviceObj.macAddress}
          onChange={this.handleChange.bind(this, "macAddress")}
          errorText={errors.macAddress}
          hintText="Please enter your MAC address"
        />
        <SelectField
          value={deviceObj.country}
          valueMember="text"
          onChange={this.handleChange.bind(this, "country")}
          errorText={errors.country}
          menuItems={countryItems}
        />
      </div>
    );
  }
}
