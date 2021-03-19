import React from 'react'
import "./Reply.css";
import { Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Reply({reply, replyname}) {

    return (
        <div className="reply">
            <div className="reply_avatar">
            <Avatar src={"images/"+reply.avatar}/>
            </div>
            <div className="reply_body">
                <div className="reply_header">
                    <div className="reply_headerText">
                        <h3> 
                            {reply.displayname}{" "} <span className="reply_headerUsername">
                                {reply.username}
                                </span>
                        </h3>
                        <span className="reply_replyUsername"> replying to {replyname} </span>
                    </div>
                    <div className="reply_headerDescription">
                        <p>{reply.text}</p>
                    </div>
                </div>
                <img src={reply.image} alt=""/>
            </div>
        </div>
    )
}

export default Reply
