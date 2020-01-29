import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to={`/`}>Home Page</Link>
        <br />
        <Link to={`/developers/`}>Developer List</Link>
      </div>
    );
  }
}
