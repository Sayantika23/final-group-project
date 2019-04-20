import React from "react";
import "./header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./search";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false
    };
    this.clicked = this.clicked.bind(this);
  }

  componentWillMount() {
    fetch('https://people.rit.edu/sxb2606/646/group-project2/Final_Group_Project_Backend/login.api.php')
            .then(res => res.json())
            .then(status => {
                if (status.isLoggedIn) {
                    this.setState({
                        status: status
                    });
                }
            });
  }

  clicked() {
    this.setState({
      menuClicked: !this.state.menuClicked
    });
  }

  loggedInStatus() {
    if(this.state.isLoggedIn) {
      return <h1 style={{background: '#9C0', fontSize: '48px'}}>LOGGEDDD IN</h1>;
    }

    else {
      return <h1 style={{background: '#9C0', fontSize: '48px'}}>NOT LOGGEDDD IN</h1>;
    }
  }
  
  render() {
    return (
      <div className="Header">
        {this.loggedInStatus()}
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
          <button onClick={this.clicked}>
            <img src={require("../photos/search.svg.png")} />
          </button>
          <div className="Menu">
            <Link to="/login">
            <h1>SIGN UP/LOG IN</h1>
            </Link>
          </div>
        </div>
        {this.state.menuClicked ? <Search exit={this.clicked.bind(this)} /> : null}
      </div>
    );
  }
}
