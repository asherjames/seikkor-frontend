import React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/lib/raised-button";
import FlatButton from "material-ui/lib/flat-button";
import "../../style/style.css";

export default class Layout extends React.Component {

  render() {
    const { history } = this.props;
    const style = {
      margin: 12,
    };
    return(
      <div>
          <h1 id="maintitle">Seikkor</h1>
          <div id="navbuttons">
            <Link to="photos"><FlatButton label="Photos" style={style}/></Link>
            <Link to="about"><FlatButton label="About" style={style}/></Link>
          </div>
          {this.props.children}
      </div>
    );
  }
}