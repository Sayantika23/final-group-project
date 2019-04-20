import React from "react";
import "./main.css";
import Score from "./score";
import HeadPhoto from "./head-photo";
import CenterAD from "./center-ad";
import Highlight from "./highlight";
import MoreNews from "./more-news";
import Sponsor from "./sponsor";

export default class Main extends React.Component {
  render() {
    let video = {
      position: "relative",
      top: "250px"
    };
    return (
      <div className="Main">
        <Score />
        <HeadPhoto />
        <CenterAD />
        <Highlight />
        <iframe
          style={video}
          width="1200"
          height="604"
          src="https://www.youtube.com/embed/R4C-W0KkZrE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <MoreNews />
        <Sponsor />
      </div>
    );
  }
}
