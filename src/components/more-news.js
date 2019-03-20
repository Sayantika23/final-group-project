import React from "react";
import "./more-news.css";

export default class MoreNews extends React.Component {
  render() {
    return (
      <div className="MoreNews">
        <img src={require("../photos/more-news.png")} />
        <div className="MoreNewsContainer">
          <img src={require("../photos/Frame2.png")} />
          <img src={require("../photos/Frame2.png")} />
          <img src={require("../photos/Frame2.png")} />
          <img src={require("../photos/Frame2.png")} />
          <img src={require("../photos/Frame2.png")} />
          <img src={require("../photos/Frame2.png")} />
        </div>
      </div>
    );
  }
}
