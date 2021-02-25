import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src=""/>
                    <input placeholder= "What's happening" type= "text" />
                 
                

                </div>
                <Button className="tweetBox_tweetButton">Tweet</Button>


            </form>

            
        </div>
    );
}

export default TweetBox
