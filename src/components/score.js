import React from "react";
import "./score.css";

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.plus = this.plus.bind(this);
  }

  plus() {
    this.setState({
      index: this.state.index + 1
    });
  }

  render() {
    let slideshowContainer = {
      transform: ""
    };
    let trans = -300 * this.state.index;
    if (this.state.index < 5) {
      slideshowContainer.transform = "translateX(" + trans + "px)";
    }
    return (
      <div className="Score">
        <a className="Left">
          <img src={require("../photos/chevron-left.png")} />
        </a>
        <a className="Right" onClick={this.plus}>
          <img src={require("../photos/chevron-right.png")} />
        </a>
        <div className="Score1">
          <div className="Score-Container"  style={slideshowContainer}>
            <img className="fade" src={require("../photos/score cell.png")} />
            <img className="fade" src={require("../photos/score cell.png")} />
            <img className="fade" src={require("../photos/score cell.png")} />
            <img className="fade" src={require("../photos/score cell.png")} />
            <img className="fade" src={require("../photos/score cell.png")} />
            <img className="fade" src={require("../photos/score cell.png")} />
          </div>
        </div>
      </div>
    );
  }
}
