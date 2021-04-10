import React from 'react'
import "./ProfilePost.css";
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Link} from "react-router-dom";

function ProfilePost({post, displayPost}) {
    
    const onClickReply = (id) =>{
        console.log('clicked reply on ' + id)
    }
    
    return (
        <div className="profilepost">
            <div className="profilepost_avatar">
                <Avatar src={"images/"+post.avatar}/>
            </div>
            <div className="profilepost_body">
                <div className="profilepost_header">
                <div className="profilepost_headerText">
                    <h3 className="profilepost_user"> 
                        {post.fname}{" "} <span className="profilepost_headerUsername">
                            {"@"}{post.username}
                            </span>
                    </h3>
                </div>
                <Link to={'post'} className='link'>
                    <div className="profilepost_headerDescription" onClick={()=>displayPost(post)}>
                        <p>{post.content}</p>
                    </div>
                </Link>
                </div>
                <img src="" alt=""/>
                <div className="profilepost_footer">
                    <ChatBubbleOutlineIcon onClick={()=>onClickReply(post.id)} fontsize="small" className="profilepost_button"/>
                    <ThumbUpOutlinedIcon fontsize="small" className="profilepost_button_right"/>
                </div>
            </div>



            
        </div>
    )
}

export default ProfilePost
