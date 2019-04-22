import React from 'react';
import "./video_detail.css";
const VideoDetail = (props) => {
    
    if(!props.video){
        return <div>.</div>;
    }

    return (   
        <div className="video_detail col-md-8">
            <div id="video_D">Welcome to the live feed</div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`}></iframe>
            </div>
            <div className="details">
                <div className="video_extra">{props.video.snippet.title}</div>
                <div className="video_extra">{props.video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;