import React from 'react';
import './sponsor.css';

export default class Sponsor extends React.Component {
    render() {
        return (
            <div className="Sponsor">
            <img src={require("../photos/sponsor.png")} />
            <div className="SponsorContainer">
            <img src={require("../photos/sp1.png")} />
            <img src={require("../photos/sp2.png")} />
            <img src={require("../photos/sp3.png")} />
            <img src={require("../photos/sp4.png")} />
            <img src={require("../photos/sp5.png")} />
            <img src={require("../photos/sp6.png")} />
            </div>
            </div>
        );
    }
}