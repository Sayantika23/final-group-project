import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

import "./references.css";

import sessionManager from '../commons/session-manager';

class App extends Component {
    componentDidMount() {
      if (!sessionManager.isLoggedIn()) {
        console.log('User not logged in', 'Redirecting . . .');
        window.location.href = '/login';
      }
    }

    render() {
        return (
            <div className="References">
                <Header />
                <div className="container" style={{ marginTop: "100px" }}>
                <h1>References</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;