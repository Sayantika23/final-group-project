import React from 'react';

const Video_Item = (props) => {

    const on_Selected = props.onUserSelected;    

    return (
    <li onClick={() => on_Selected(props.video)} className="list-group-item">
        <div>
            <div>
                <img src={props.video.snippet.thumbnails.default.url} />
            </div>
            <div>
                {/* <div className="media-heading">{props.video.snippet.title}</div> */}
                <div>{props.video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default Video_Item;