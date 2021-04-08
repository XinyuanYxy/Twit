import {useState} from 'react'
import axios from '../api/axios';
import './Profile.css'
import Header from "../Header";
import ProfileUser from "./ProfileUser"
import ProfilePost from "./ProfilePost"

function Profile({user, displayPost}) {
    const [posts, setPosts] = useState([
        {
            id: 0,
            displayname: user.displayname,
            username: user.username,
            text: 'this is my third post!',
            avatar: user.avatar
        },
        {
            id: 1,
            displayname: user.displayname,
            username: user.username,
            text: 'Wow, two whole posts?',
            avatar: user.avatar
        },
        {
            id: 2,
            displayname: user.displayname,
            username: user.username,
            text: 'Yep. First post ever, kind\'ve a big deal.',
            avatar: user.avatar
        }
    ]);
    
    const id = 2;
    const getPosts = async () => {
        return await axios.get(`/post/user/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    };

    const profilePosts = getPosts();

    return (
        <div className="profile"> 
            {/* Header */}
            <Header headerText={user.username}/>
            <ProfileUser user={user}/>
            {posts.map((post) =>(
                <ProfilePost key={post.id} post={post} displayPost={displayPost}/>
            ))}
        </div>
    );
}

export default Profile
