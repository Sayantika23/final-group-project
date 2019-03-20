import React from "react";
import "./head-photo.css";

export default class HeadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    if (this.state.index < 3) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 1
      });
    }
  }
  minus() {
    if (this.state.index > 0)
      this.setState({
        index: this.state.index - 1
      });
    else {
      this.setState({ index: 1 });
    }
  }

  render() {
    let slideshowContainer = {
      transform: ""
    };
    let trans = -798 * (this.state.index);
    if (this.state.index < 3) {
      slideshowContainer.transform = "translateX(" + trans + "px)";
    } else {
      slideshowContainer.transform = "";
    }

    let dot = {
      width: 12,
      height: 12,
      borderRadius: 8,
      background: "#BBBBBB"
    };
    let dot1 = {
      width: 12,
      height: 12,
      borderRadius: 10,
      background: "#d19433"
    };

    return (
      <div className="Head">
        <div className="HeadPhoto">
          <div className="HeadPhoto-Container" style={slideshowContainer}>
            <img src={require("../photos/head-photo.png")} />
            <img src={require("../photos/head-photo.png")} />
            <img src={require("../photos/head-photo.png")} />
          </div>
          <a href="https://www.ittf.com/2019/02/26/farewell-national-championships-timo-boll-focused-budapest/?from=4">
            <img className="HeadButton" src={require("../photos/Frame.png")} />{" "}
          </a>
          <a>
            <img
              className="Left"
              src={require("../photos/left.png")}
              onClick={this.minus}
            />
          </a>
          <a>
            <img
              className="Right"
              src={require("../photos/right.png")}
              onClick={this.plus}
            />
          </a>
          <div className="Dots">
            <div className="Dot" style={this.state.index == 0? dot1: dot} ></div> 
            <div className="Dot" style={this.state.index == 1? dot1: dot} ></div> 
            <div className="Dot" style={this.state.index == 2? dot1: dot} ></div> 
          </div>
        </div>
        <div className="MainAD">
          <img src={require("../photos/Donic-2019.gif")} width="350" />
          <div className="ad">Advertisement</div>
        </div>
      </div>
    );
  }
}
