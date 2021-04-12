import React from 'react'
import "./Reply.css";
import { Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";

function Reply({reply, replyname, displayProfile}) {
    const getAvatarImageSrc = () => {
        let imgSrc;
        if (reply.avatar_image_path !== null && reply.avatar_image_path !== "null") {
            imgSrc = "http://localhost:3001/images/"+reply.avatar_image_path;
        } else {
            imgSrc = "";
        }
        return imgSrc;
    }

    const getReplyImageSrc = () => {
        let imgSrc;
        if (reply.reply_image_path !== null && reply.reply_image_path !== "null") {
            imgSrc = "http://localhost:3001/images/"+reply.reply_image_path;
        } else {
            imgSrc = "";
        }
        return imgSrc;
    }

    return (
        <div className="reply">
            <div className="reply_avatar">
                <Link to={'profile'} className='link'>
                <Avatar src={getAvatarImageSrc()} onClick={()=>displayProfile(reply)}/>
                </Link>
            </div>
            <div className="reply_body">
                <div className="reply_header">
                    <Link to={'profile'} className="reply_headerText" onClick={()=>displayProfile(reply)}>
                        <h3> 
                            {reply.fname}{" "} <span className="reply_headerUsername">
                                {"@"}{reply.username}
                                </span>
                        </h3>
                    </Link>
                    <span className="reply_replyUsername"> replying to {replyname} </span>
                    
                    <div className="reply_headerDescription">
                        <p>{reply.content}</p>
                    </div>
                </div>
                <img className="reply_image" src={getReplyImageSrc()} alt=""/>
            </div>
        </div>
    )
}

export default Reply
