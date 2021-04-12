import React from 'react'
import "./FeedPost.css";
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Link} from "react-router-dom";

function FeedPost({post, displayPost, displayProfile}) {
    
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
        <div className="feedpost">
            <div className="feedpost_avatar">
            <Link to={'profile'} className='link'>
                <Avatar src={getAvatarImageSrc()} onClick={()=>displayProfile(post)}/>
            </Link>
            </div>
            <div className="feedpost_body">
                <div className="feedpost_header">
                <div className="feedpost_headerText">
                <Link to={'profile'} className='link'>
                    <h3 className="feedpost_user" onClick={()=>displayProfile(post)}> 
                        {post.fname}{" "} <span className="feedpost_headerUsername">
                        {"@"}{post.username}
                            </span>
                    </h3>
                </Link>
                </div>
                <Link to={'post'} className='link'>
                    <div className="feedpost_headerDescription" onClick={()=>displayPost(post)}>
                        <p>{post.content}</p>
                    </div>
                </Link>
                </div>
                <img className="feedpost_image" src={getPostImageSrc()} alt=""/>
            </div>



            
        </div>
    )
}

export default FeedPost
