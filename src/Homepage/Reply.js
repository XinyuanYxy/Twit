import React from 'react'
import "./Reply.css";
import { Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";

function Reply({reply, replyname, displayProfile}) {

    return (
        <div className="reply">
            <div className="reply_avatar">
                <Link to={'profile'} className='link'>
                <Avatar src={"images/"+reply.avatar} onClick={()=>displayProfile(reply)}/>
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
                <img src={reply.image} alt=""/>
            </div>
        </div>
    )
}

export default Reply
