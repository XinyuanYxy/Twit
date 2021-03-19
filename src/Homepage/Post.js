import React from 'react'
import "./Post.css";
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
function Post({post, displayPost}) {
    
    const onClickReply = (id) =>{
        console.log('clicked reply on ' + id)
    }

    const onClickProfile = (id) =>{
        console.log('clicked profile on '+ id)
    }
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar style={{ height: '70px', width: '70px' }} src={"images/"+post.avatar} onClick={()=>onClickProfile(post.id)}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                <div className="post_headerText">
                    <h3 onClick={()=>onClickProfile(post.id)}> 
                        {post.displayname}{" "} <span className="post_headerUsername">
                            {post.username}
                            </span>
                    </h3>
                </div>
                    <div className="post_headerDescription" onClick={()=>displayPost(post)}>
                        <p className="post_mainText">{post.text}</p>
                    </div>
                </div>
                <img src="" alt=""/>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon onClick={()=>onClickReply(post.id)} fontsize="small" className="post_button"/>
                    <FavoriteBorderIcon fontsize="small" className="post_button"/>
                </div>
            </div>



            
        </div>
    )
}

export default Post
