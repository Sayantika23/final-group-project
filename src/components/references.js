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
            <div className="References List-style">
                <Header />
                <div className="container" style={{ marginTop: "100px" }}>
                <h1>References</h1>
                <ul>
                  <li><a href="https://wttc2019.jegy.hu/programseries/liebherr-2019-ittf-asztalitenisz-vilagbajnoksag-11/">Tickets Page Inspiration</a></li>
                  <li><a href="https://www.ittf.com/">ITTF Logo</a></li>
                  <li><a href="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140,2000%7C71c-TFH-u9L.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0._UX522_.png">T-shirt</a></li>
                  <li><a href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Tabletennis.jpg/300px-Tabletennis.jpg">TT Bat</a></li>
                  <li><a href="https://images-na.ssl-images-amazon.com/images/I/715%2Bc%2BT-edL._SX425_.jpg">TT Balls</a></li>
                  <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router Tutorial</a></li>
                  <li><a href="https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-1-3b949de9b251">YouTube Tutorial 1</a></li>
                  <li><a href="https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-2-a5f91d4fe61d">YouTube Tutorial 2</a></li>
                  <li><a href="https://www.npmjs.com/package/react-youtube">React Integration with YouTube</a></li>
                  <li><a href="https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121">Bootstrap integration with React</a></li>
                  <li><a href="https://medium.com/@nabendu82/create-youtube-player-in-reactjs-part-3-9606a7b5e010">YouTube Tutorial 3</a></li>
                  <li><a href="https://www.npmjs.com/package/youtube-api-v3-search">YouTube API Search</a></li>
                  <li><a href="https://developers.google.com/youtube/v3/docs/search/list">YouTube API Search Description</a></li>
                  <li><a href="https://reactjs.org/tutorial/tutorial.html">React Tutorial</a></li>
                  <li><a href="https://www.w3schools.com/">W3Schools</a></li>
                  <li><a href="https://www.flaticon.com/authors/stephen-hutchings">Shopping Cart icon By Stephen Hutchings</a></li>
                </ul>

                </div>
                <Footer />
            </div>
        );
    }
}

export default App;