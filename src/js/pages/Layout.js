import React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/lib/raised-button";
import FlatButton from "material-ui/lib/flat-button";

export default class Layout extends React.Component {

  render() {
    const { history } = this.props;
    const style = {
      margin: 12,
    };
    return(
      <div>
        <h1>Seikkor</h1>
        <Link to="photos"><FlatButton label="Photos" style={style}/></Link>
        <Link to="about"><FlatButton label="About" style={style}/></Link>
        {this.props.children}
      </div>
    );
  }
}