import React from 'react'
import "./Post.css";
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Link} from "react-router-dom";

function Post({post, displayPost, displayProfile}) {
    
    const onClickReply = (id) =>{
        console.log('clicked reply on ' + id)
    }

    return (
        <div className="post">
            <div className="post_avatar">
                <Link to={'profile'} className='link'>
                    <Avatar style={{ height: '70px', width: '70px' }} src={"images/"+post.avatar} onClick={()=>displayProfile(post)}/>
                </Link>
            </div>
            <div className="post_body">
                <div className="post_header">
                <div className="post_headerText">
                <Link to={'profile'} className='link'>
                    <h3 onClick={()=>displayProfile(post)}> 
                        {post.displayname}{" "} <span className="post_headerUsername">
                            {post.username}
                            </span>
                    </h3>
                </Link>
                </div>
                    <div className="post_headerDescription">
                        <p className="post_mainText">{post.text}</p>
                    </div>
                </div>
                <img src="" alt=""/>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon onClick={()=>onClickReply(post.id)} fontsize="small" className="post_button"/>
                    <ThumbUpOutlinedIcon fontsize="small" className="post_button_right"/>
                </div>
            </div>



            
        </div>
    )
}

export default Post
