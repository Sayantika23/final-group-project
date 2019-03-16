import React from "react";
import "./score.css";

export default class Score extends React.Component {
  render() {
    return (
      <div className="Score">
        <a className="Left">
          <img src={require("../photos/chevron-left.png")} />
        </a>
        <a className="Right">
          <img src={require("../photos/chevron-right.png")} />
        </a>
        <div className="Score1">
          <div className="Score-Container">
            <img src={require("../photos/score cell.png")} />
            <img src={require("../photos/score cell.png")} />
            <img src={require("../photos/score cell.png")} />
            <img src={require("../photos/score cell.png")} />
            <img src={require("../photos/score cell.png")} />
            <img src={require("../photos/score cell.png")} />
          </div>
        </div>
      </div>
    );
  }
}
