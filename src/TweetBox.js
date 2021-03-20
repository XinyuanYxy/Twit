import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';
import { useState } from 'react'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

function TweetBox({makePost}) {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Tweet can\'t be empty');
            return;
        }

        makePost({displayname:'Chris',username:'@yxychr',text,avatar:null })
        setText('')
    }

    return (
        <div className="tweetBox">
            <form onSubmit={onSubmit}>
                <div className="tweetBox_input">
                    <Avatar src=""/>
                    <textarea value={text} placeholder= "What's happening?" onChange={(e) => setText(e.target.value)}/>
                </div>
                <button className="tweetBox_imageButton">
                    <PhotoCameraOutlinedIcon />
                </button>
                <input type='submit' value='Tweet' className="tweetBox_tweetButton"/>
            </form>
        </div>
    );
}

export default TweetBox
