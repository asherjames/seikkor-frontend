import React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/lib/raised-button";
import FlatButton from "material-ui/lib/flat-button";
import "../../style/style.scss";

export default class Layout extends React.Component {

  render() {
    const { history } = this.props;
    return(
      <div>
          <h1 id="maintitle">Seikkor</h1>
          <div id="navbuttons">
            <Link to="photos"><FlatButton label="Photos"/></Link>
            <Link to="about"><FlatButton label="About"/></Link>
          </div>
          {this.props.children}
      </div>
    );
  }
}