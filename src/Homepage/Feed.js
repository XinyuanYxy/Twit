import {useState} from 'react';
import React from 'react';
import "./Feed.css";
import TweetBox from '../TweetBox';
import FeedPost from "./FeedPost";
import Header from '../Header';
import axios from '../api/axios';

function Feed({displayPost, displayProfile}){
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

    // test add a follower since that isn't wired up in the frontend
    const testFollow = async () => {
        try {
            await axios.post("/follow", 
                {
                    following_id: 1, 
                },
                {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (e) {} // do nothing 
    }
    testFollow();

    const getPosts = async () => {
        return await axios.get("/post", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    }

    const feedPosts = getPosts();

    
    const makePost = async (post) =>{
        //Replace with proper code for making a new post
        // const id = Math.floor(Math.random() * 10000) + 1

        // const newPost = {id,...post}

        // TODO photo upload
        console.log()
        const submitPost = {
            content: post.text,
            date: Date.now(),
            picture_id: null,
        }
        try {
            const postId = await axios.post("/post", submitPost, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).data.postId;
            const newPost = {postId,...post}
            setPosts([newPost,...posts])
        } catch (e) {
            // TODO error message?
        }

    }

    return (
        <div className="feed"> 
           <Header headerText="Home"/>
            {/* TweetBox */}
            <TweetBox makePost={makePost}/>

            {/* post */}
            {posts.map((post) =>(
                <FeedPost key={post.id} post={post} displayPost={displayPost} displayProfile={displayProfile}/>
            ))}

        </div>
    );
}

export default Feed