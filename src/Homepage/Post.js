import React from 'react'
import "./Post.css";
import { Avatar} from '@material-ui/core';
import {useState} from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Link} from "react-router-dom";
import ReplyBox from '../ReplyBox';

function Post({post, displayProfile}) {
    
    const [showReply, setShowReply] = useState({
        showing: false
    });

    const getAvatarImageSrc = () => {
        let imgSrc;
        if (post.avatar_image_path !== null && post.avatar_image_path !== "null") {
            imgSrc = "http://localhost:3001/images/"+post.avatar_image_path;
        } else {
            imgSrc = "";
        }
        return imgSrc;
    }

    const getPostImageSrc = () => {
        let imgSrc;
        if (post.post_image_path !== null && post.post_image_path !== "null") {
            imgSrc = "http://localhost:3001/images/"+post.post_image_path;
        } else {
            imgSrc = "";
        }
        return imgSrc;
    }

    return (
        <div className="post">
            <div className="post_avatar">
                <Link to={'profile'} className='link'>
                    <Avatar style={{ height: '70px', width: '70px' }} src={getAvatarImageSrc()} onClick={()=>displayProfile(post)}/>
                </Link>
            </div>
            <div className="post_body">
                <div className="post_header">
                <div className="post_headerText">
                <Link to={'profile'} className='link'>
                    <h3 onClick={()=>displayProfile(post)}> 
                        {post.fname}{" "} <span className="post_headerUsername">
                        {"@"}{post.username}
                            </span>
                    </h3>
                </Link>
                </div>
                    <div className="post_headerDescription">
                        <p className="post_mainText">{post.content}</p>
                    </div>
                </div>
                <img className="post_image" src={getPostImageSrc()} alt=""/>
            </div>
        </div>
    )
}

export default Post
