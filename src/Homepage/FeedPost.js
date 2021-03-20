import React from 'react'
import "./FeedPost.css";
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import {Link} from "react-router-dom";

function FeedPost({post, displayPost, displayProfile}) {
    
    const onClickReply = (id) =>{
        console.log('clicked reply on ' + id)
    }
    return (
        <div className="feedpost">
            <div className="feedpost_avatar">
            <Link to={'profile'} className='link'>
                <Avatar src={"images/"+post.avatar} onClick={()=>displayProfile(post)}/>
            </Link>
            </div>
            <div className="feedpost_body">
                <div className="feedpost_header">
                <div className="feedpost_headerText">
                <Link to={'profile'} className='link'>
                    <h3 className="feedpost_user" onClick={()=>displayProfile(post)}> 
                        {post.displayname}{" "} <span className="feedpost_headerUsername">
                            {post.username}
                            </span>
                    </h3>
                </Link>
                </div>
                <Link to={'post'} className='link'>
                    <div className="feedpost_headerDescription" onClick={()=>displayPost(post)}>
                        <p>{post.text}</p>
                    </div>
                </Link>
                </div>
                <img src="" alt=""/>
                <div className="feedpost_footer">
                    <ChatBubbleOutlineIcon onClick={()=>onClickReply(post.id)} fontsize="small" className="feedpost_button"/>
                    <FavoriteBorderIcon fontsize="small" className="post_button"/>
                </div>
            </div>



            
        </div>
    )
}

export default FeedPost
