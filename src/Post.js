import React from 'react'
import "./Post.css";
import { Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Public'
import RepeatIcon  from '@material-ui/icons/Repeat';
function Post({displayname,username,verified, timestamp,
    text,image, avatar,}) {

    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar></Avatar>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3> 
                            Chris{" "} <span>
                                <VerifiedUserIcon className="post_badge"/> 
                                @yxychr
                                </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>I urge you not to drag others down</p>
                    </div>
                </div>
                <img src="" alt=""/>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontsize="small" />
                    <RepeatIcon fontSize ="small"/>
                    <FavoriteBorderIcon fontsize="small"/>
                    <PublishIcon fontSize="small" />


                </div>
            </div>



            
        </div>
    )
}

export default Post
