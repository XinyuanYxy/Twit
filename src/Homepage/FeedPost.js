import React from 'react'
import "./FeedPost.css";
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
function FeedPost({post, displayPost}) {
    
    const onClickReply = (id) =>{
        console.log('clicked reply on ' + id)
    }

    const onClickProfile = (id) =>{
        console.log('clicked profile on '+ id)
    }
    return (
        <div className="feedpost">
            <div className="feedpost_avatar">
                <Avatar src={"images/"+post.avatar} onClick={()=>onClickProfile(post.id)}/>
            </div>
            <div className="feedpost_body">
                <div className="feedpost_header">
                <div className="feedpost_headerText">
                    <h3 onClick={()=>onClickProfile(post.id)}> 
                        {post.displayname}{" "} <span className="feedpost_headerUsername">
                            {post.username}
                            </span>
                    </h3>
                </div>
                    <div className="feedpost_headerDescription" onClick={()=>displayPost(post)}>
                        <p>{post.text}</p>
                    </div>
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
