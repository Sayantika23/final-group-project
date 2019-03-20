import React from "react";
import "./center-ad.css";

export default class CenterAD extends React.Component {
  render() {
    return (
      <div class="CenterAD">
        <img
          src={require("../photos/190116-ITTF-BANNER_728x90_FOREVER.gif")}
          height="110"
        />
      </div>
    );
  }
}
