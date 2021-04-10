import React from 'react'
import "./FeedPost.css";
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Link} from "react-router-dom";

function FeedPost({post, displayPost, displayProfile}) {
    
    return (
        <div className="feedpost">
            <div className="feedpost_avatar">
            <Link to={'profile'} className='link'>
                <Avatar src={"images/"+post.image_path} onClick={()=>displayProfile(post)}/>
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
                <img src="" alt=""/>
            </div>



            
        </div>
    )
}

export default FeedPost
