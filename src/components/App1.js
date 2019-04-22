import Header from './header';
import Footer from './footer';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Video_Lists from './video_list'
import VideoDetail from './video_detail';
import sessionManager from '../commons/session-manager';

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
        videos: [],
        selected_V: null
    };
    this.video_Searches();
}

componentDidMount() {
  if (!sessionManager.isLoggedIn()) {
      console.log('User not logged in', 'Redirecting . . .');
      window.location.href = '/login';
  }
}

video_Searches() {
  YTSearch({key: API_KEY, term: 'Live Tennis 2019'}, (data) => {console.log(data); this.setState({ 
          videos: data,
          selected_V: data[0]
      });
  });
}
  render() {
    return (
      <div className="App1">
      <Header />
        <div id="video_D">Get the latest feeds here!</div>
        <VideoDetail video={this.state.selected_V}/>
        <Video_Lists onVideoSelect={userSelected => this.setState({selected_V: userSelected})}
        videos={this.state.videos} />
      {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
