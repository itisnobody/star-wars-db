import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className={'header d-flex'}>
        <h3>
          <Link to={"/"}>Star DB</Link>
        </h3>
        <ul className={'d-flex'}>
          <li>
            <Link to={"/people"}>People</Link>
          </li>
          <li>
            <Link to={"/planets"}>Planets</Link>
          </li>
          <li>
            <Link to={"/starships"}>Starships</Link>
          </li>
        </ul>
      </header>
    );
  }
};