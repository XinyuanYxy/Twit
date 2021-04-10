import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './ReplyBox.css';
import { useState, useRef } from 'react'
import axios from './api/axios';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

function ReplyBox({post}) {

    const [text, setText] = useState('')

    const inputFile = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Reply can\'t be empty');
            return;
        }

        makeReply({text})
        setText('')
    }

    const upload = () => {
        inputFile.current.click();
    };

    const makeReply = async (info) =>{
    
        const submitReply = {
            content: info.text,
            post_id: post.post_id,
            date: Date.now(),
            picture_id: null,
        }
        try {
            await axios.post("/reply", submitReply, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (e) {
            // TODO error message?
        }
    
    }

    return (
        <div className="replyBox">
            <form onSubmit={onSubmit}>
                <div className="replyBox_input">
                    <Avatar src=""/>
                    <textarea value={text} placeholder= "Reply..." onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="replyBox_buttons_container">
                    {/* Hacky fix to have button trigger image upload */}
                    <input id="image_upload" class="image_upload" type="file" ref={inputFile} />
                    <button className="replyBox_imageButton" type="button" onClick={upload}>
                        <PhotoCameraOutlinedIcon />
                    </button>
                    <input onClick={onSubmit} type="submit" value='Reply' className="replyBox_replyButton"/>
                </div>
            </form>
        </div>
    );
}

export default ReplyBox
