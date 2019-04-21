import React from "react";
import "./header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./search";

import sessionManager from '../commons/session-manager';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
      session: null
    };
    this.clicked = this.clicked.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.setState({
      session: sessionManager.getSession()
    });
  }

  clicked() {
    this.setState({
      menuClicked: !this.state.menuClicked
    });
  }

  logout() {
    sessionManager.logout();

    this.setState({
      session: {}
    });

    window.location.href = '/login';
  }

  render() {
    const userStatus = (this.state.session && this.state.session.userId ?
      (
        <div>
          <Link to="/shoppingCart">
            <img className="shopping-cart" src={require('../photos/shopping-cart.svg')} alt="Shopping Cart Icon" />
          </Link>
          <h1 style={{ display: 'inline-block' }}>Welcome, {this.state.session.username}</h1>
          <button onClick={this.logout}>Logout</button>
        </div>
      ) :
      <a href="/login">
        <h1>LOG IN</h1>
      </a>
    );
    return (
      <div className="Header">
        <Link to="/">
          <img onClick={window.location.reload} className="Logo" src={require("../photos/logo.png")} />
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
              <a href="https://world-championships.netlify.com/">World Championships</a>
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
              <h1>LIVE</h1>
              <img src={require("../photos/chevron-down.png")} />
            </div>
            <div className="DropDown">
              <a href="#">Scores</a>
              <a href="https://tv.ittf.com/">ITTV</a>
              <a href="#">Broadcast</a>
            </div>
          </div>
          <div className="Menu">
            {/* <a href="https://wttc2019.jegy.hu/programseries/liebherr-2019-ittf-asztalitenisz-vilagbajnoksag-11/"> */}
            <Link to="/tickets"><h1>TICKETS</h1></Link>

            {/* </a> */}
          </div>
          <div className="Menu">
            <Link to="/store">
              <h1>STORE</h1>
            </Link>
          </div>
          <div className="Menu">
            <div className="Menu1">
              <h1>MORE</h1>
              <img src={require("../photos/chevron-down.png")} />
            </div>
          </div>
        </div>
        <div className="Side-Nav">
          {/*
          <button onClick={this.clicked}>
            <img src={require("../photos/search.svg.png")} />
          </button>
          */}
          <div className="Menu">
            {userStatus}
          </div>
        </div>
        {this.state.menuClicked ? <Search exit={this.clicked.bind(this)} /> : null}
      </div>
    );
  }
}
