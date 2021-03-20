import React,{useState,useEffect} from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from "./Post";
import db from './firebase'

function Feed(){
    const [posts, setPosts] = useState([]);

    // useEffect(()=>{
    //     db.collection('posts').onSnapshot(snapshopt =>(
    //         setPosts(snapshot.docs.map(doc=>doc.data()))
    //     ))

    // },[])
    
    return (
        <div className="feed"> 
            {/* Header */}
            <div className="feed_header"> 
            <h2>Home</h2>
            
           

          




             

            
            </div>
            

    
            {/* TweetBox */}
            <TweetBox />
            

          
    
        
            
     

        

            {/* post */}
            <Post 
            displayname=" chris"
            username = 'xyxchris'
            verified = {true}
            text="it's working"
            avatar = ""

            />
     
          

            {/* post */}
            {/* post */}
            {/* post */}

        </div>
    );
}

export default Feed