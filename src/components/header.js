import React from "react";
import "./header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Link to="/" onClick="window.location.reload()">
          <img className="Logo" src={require("../photos/logo.png")} />
        </Link>
        <div className="Main-Nav">
          <div className="Menu">
            <a href="https://www.ittf.com/news/">
              <h1>NEWS</h1>
            </a>
          </div>
          <div className="Menu">
            <div className="Menu1">
              <h1>TOURNAMENTS</h1>
              <img src={require("../photos/chevron-down.png")} />
            </div>
            <div className="DropDown">
              <a href="#">World Championships</a>
              <a href="#">Upcoming</a>
              <a href="https://www.ittf.com/tournaments/">Calender</a>
            </div>
          </div>
          <div className="Menu">
            <div className="Menu1">
              <h1>PLAYERS</h1>
              <img src={require("../photos/chevron-down.png")} />
            </div>
            <div className="DropDown">
              <a href="https://www.ittf.com/rankings/">Ranking</a>
              <a href="http://results.ittf.link/">Stat</a>
            </div>
          </div>
          <div className="Menu">
            <div className="Menu1">
              <h1>WATCH</h1>
              <img src={require("../photos/chevron-down.png")} />
            </div>
            <div className="DropDown">
              <a href="https://tv.ittf.com/">ITTV</a>
              <a href="#">Broadcast</a>
            </div>
          </div>
          <div className="Menu">
            <a href="https://wttc2019.jegy.hu/programseries/liebherr-2019-ittf-asztalitenisz-vilagbajnoksag-11/">
              <h1>TICKETS</h1>
            </a>
          </div>
          <div className="Menu">
            <h1>STORE</h1>
          </div>
          <div className="Menu">
            <div className="Menu1">
              <h1>MORE</h1>
              <img src={require("../photos/chevron-down.png")} />
            </div>
          </div>
        </div>
        <div className="Side-Nav">
          <a href="https://cn.ittf.com/">
            <div className="Menu">
              <h1>中文</h1>
            </div>
          </a>
          <img src={require("../photos/search.svg.png")} />
          <div className="Menu">
            <h1>SIGN UP/LOG IN</h1>
          </div>
        </div>
      </div>
    );
  }
}
