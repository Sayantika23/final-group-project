import React from "react";
import "./score.css";

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    if (this.state.index < 6) {
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
    if(this.state.index > 0) this.setState({
      index: this.state.index - 1
    }); else {
      this.setState({index: 0});
    }
  }

  render() {
    let slideshowContainer = {
      transform: ""
    };
    let trans = -300 * this.state.index;
    if (this.state.index < 6) {
      slideshowContainer.transform = "translateX(" + trans + "px)";
    } else {
      slideshowContainer.transform = "";
    }
    return (
      <div className="Score">
        <a className="Left" onClick={this.minus}>
          <img src={require("../photos/chevron-left.png")} />
        </a>
        <a className="Right" onClick={this.plus}>
          <img src={require("../photos/chevron-right.png")} />
        </a>
        <div className="Score1">
          <div className="Score-Container" style={slideshowContainer}>
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
