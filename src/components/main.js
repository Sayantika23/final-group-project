import React from "react";
import "./main.css";
import Score from './score';
import HeadPhoto from "./head-photo";
import CenterAD from './center-ad';
import Highlight from './highlight';

export default class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Score />
        <HeadPhoto />
        <CenterAD />
        <Highlight />
      </div>
    );
  }
}
