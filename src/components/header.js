import React from "react";
import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img className="Logo" src={require("../photos/logo.png")} />
        <div className="Main-Nav">
          <div className="Menu"><h1>NEWS</h1></div>
          <div className="Menu">
            <h1>TOURNAMENTS</h1>
            <img src={require("../photos/chevron-down.png")} />
          </div>
          <div className="Menu">
            <h1>PLAYERS</h1>
            <img src={require("../photos/chevron-down.png")} />
          </div>
          <div className="Menu">
            <h1>WATCH</h1>
            <img src={require("../photos/chevron-down.png")} />
          </div>
          <div className="Menu"><h1>TICKETS</h1></div>
          <div className="Menu"><h1>STORE</h1></div>
          <div className="Menu">
            <h1>MORE</h1>
            <img src={require("../photos/chevron-down.png")} />
          </div>
        </div>
        <div className="Side-Nav">
          <div className="Menu">中文</div>
          <img src={require("../photos/search.svg.png")} />
          <div className="Menu">SIGN UP/LOG IN</div>
        </div>
      </div>
    );
  }
}
