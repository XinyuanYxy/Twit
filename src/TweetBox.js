import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';
import { useState, useRef } from 'react'
import axios from './api/axios';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

function TweetBox() {

    const [text, setText] = useState('')

    const inputFile = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Tweet can\'t be empty');
            return;
        }

        makePost({displayname:'Chris',username:'@yxychr',text,avatar:null })
        setText('')
    }

    const upload = () => {
        inputFile.current.click();
    };

    const makePost = async (post) =>{
    
        // TODO photo upload
        const submitPost = {
            content: post.text,
            date: Date.now(),
            picture_id: null,
        }
        try {
            const postId = await axios.post("/post", submitPost, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).data.postId;
        } catch (e) {
            // TODO error message?
        }
    
    }

    return (
        <div className="tweetBox">
            <form onSubmit={onSubmit}>
                <div className="tweetBox_input">
                    <Avatar src=""/>
                    <textarea value={text} placeholder= "What's happening?" onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="tweetBox_buttons_container">
                    {/* Hacky fix to have button trigger image upload */}
                    <input id="image_upload" class="image_upload" type="file" ref={inputFile} />
                    <button className="tweetBox_imageButton" type="button" onClick={upload}>
                        <PhotoCameraOutlinedIcon />
                    </button>
                    <input onClick={onSubmit} type="submit" value='Post' className="tweetBox_tweetButton"/>
                </div>
            </form>
        </div>
    );
}

export default TweetBox
