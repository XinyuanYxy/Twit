import React,{useState, useEffect} from 'react'
import './Profile.css'
import TweetBox from './TweetBox';
import Post from "./Post";

function Profile() {
    return (
        <div className="profile"> 
            {/* Header */}
            <div className="profile_header"> 
                <h2>My Profile</h2>
   
            </div>
            
            {/* post */}
            <Post 
            displayname=" chris"
            username = 'xyxchris'
            verified = {true}
            text="im in profile page"
            avatar = ""

            />
     
          

            {/* post */}
            {/* post */}
            {/* post */}

        </div>
    );
}

export default Profile
