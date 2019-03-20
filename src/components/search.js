import React from "react";
import "./search.css";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="Search">
        <div className="SearchContainer">
          <form action="#">
            <input type="text" placeholder="Search on ITTF.com"></input>
            <input
              type="image"
              src={require("../photos/search.svg.png")}
              alt="Submit"
            />
          </form>{" "}
        </div>
        <button onClick={this.props.exit}><img src={require("../photos/exit.png")} width="30" /></button>
      </div>
    );
  }
}
