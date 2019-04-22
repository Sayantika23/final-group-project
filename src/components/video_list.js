import React from 'react';
import Video_Item from './video_list_item';
import "./video_detail.css";

const Video_Lists = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <Video_Item 
                onUserSelected={props.onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });
    return (
        <div>
            <div id="side_bar">Suggested Highlights</div>
                <ul className="col-md-4 list-group">
                    {videoItems}
                </ul>
        </div>
    );
};
export default Video_Lists;