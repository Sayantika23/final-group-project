import React from "react";
import "./head-photo.css";

export default class HeadPhoto extends React.Component {
  render() {
    return (
      <div className="Head">
        <div className="HeadPhoto">
          <div className="HeadPhoto-Container">
            <img src={require("../photos/head-photo.png")} />
            <img src={require("../photos/head-photo.png")} />
            <img src={require("../photos/head-photo.png")} />
          </div>
          <a>
            <img className="HeadButton" src={require("../photos/Frame.png")} />{" "}
          </a>
          <img className="Left" src={require("../photos/left.png")} />
          <img className="Right" src={require("../photos/right.png")} />
          <div className="Dots">
            <img src={require("../photos/Round-2.png")} />
            <img src={require("../photos/Round-2.png")} />
            <img src={require("../photos/Round-2.png")} />
          </div>
        </div>
        <div className="MainAD">
          <img src={require("../photos/Donic-2019.gif")} width="350" />
        </div>
      </div>
    );
  }
}
