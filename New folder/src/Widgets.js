import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className = "widgets" >
            <h2> Widgets</h2>
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search Twitter" type ="text" />


            </div>
            <div className="widgets_widgetContainer">
                <h2>what's happening</h2>
                <TwitterTimelineEmbed tweetId={" "} />

                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="ChrisEvan"
                    options = {{height: 400}}
                
                />
            </div>
        </div>
    )
}

export default Widgets;