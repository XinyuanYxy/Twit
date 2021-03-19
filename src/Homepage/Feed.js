import {useState} from 'react';
import React from 'react';
import "./Feed.css";
import TweetBox from '../TweetBox';
import FeedPost from "./FeedPost";
import Header from '../Header';

function Feed({displayPost}){
    const [posts, setPosts] = useState([
        {
            id: 0,
            displayname: 'Chris',
            username: '@yxychr',
            text: 'this is a test post',
            avatar: null
        },
        {
            id: 1,
            displayname: 'Elmo',
            username: '@sesamestreetelmo',
            text: 'elmo has tweeter now!',
            avatar: 'elmo.jpg'
        },
        {
            id: 2,
            displayname: 'Obama',
            username: '@therealobama',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi arcu, facilisis in dui nec, facilisis iaculis dolor. Maecenas hendrerit dignissim mattis. Proin diam lectus, finibus in elit vel, molestie aliquet nisi. Aliquam nisl erat, dignissim quis velit vitae, vestibulum tincidunt dui. Suspendisse semper hendrerit nisi, a fermentum tortor porta quis.',
            avatar: 'obama.jpg'
        }
    ]);

    
    const makePost = (post) =>{
        //Replace with proper code for making a new post
        const id = Math.floor(Math.random() * 10000) + 1

        const newPost = {id,...post}
        setPosts([newPost,...posts])
    }

    return (
        <div className="feed"> 
           <Header headerText="Home"/>
            {/* TweetBox */}
            <TweetBox makePost={makePost}/>

            {/* post */}
            {posts.map((post) =>(
                <FeedPost key={post.id} post={post} displayPost={displayPost}/>
            ))}

        </div>
    );
}

export default Feed