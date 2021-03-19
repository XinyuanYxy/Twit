import React from 'react';
import {useState} from 'react';
import "./FullPost.css";
import Post from "./Post";
import Reply from "./Reply";
import Header from '../Header';

function FullPost({post, displayPost}){
    const [replies, setReplies] = useState([
        {
            id: 0,
            displayname: 'Obama',
            username: '@therealobama',
            text: 'I approve of this message.',
            avatar: 'Obama.jpg'
        },
        {
            id: 1,
            displayname: 'Elmo',
            username: '@sesamestreetelmo',
            text: 'wow, obama approved this? elmo is surprised!',
            avatar: 'elmo.jpg'
        },
        {
            id: 2,
            displayname: 'Walter',
            username: '@walter76',
            text: 'my name is walter',
            avatar: 'walter.jpg'
        }
    ])
    return (
        <div className="fullpost"> 
            <Header headerText="Tweeter"/>
            {/* post */}
            <Post post={post} displayPost={displayPost}/>
            
            {/* replies */}
            {replies.map((reply) =>(
                <Reply key={reply.id} reply={reply} replyname={post.username}/>
            ))}
        </div>
    );
}

export default FullPost