import React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/lib/raised-button";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const { history } = this.props;
    const style = {
      margin: 12,
    };
    return(
      <div>
        <h1>Seikkor</h1>
        <Link to="photos"><RaisedButton label="Photos" secondary={true} style={style}/></Link>
        <Link to="about"><RaisedButton label="About" primary={true} style={style}/></Link>
      </div>
    );
  }
}