import {useState} from 'react'
import axios from '../api/axios';
import './Profile.css'
import Header from "../Header";
import ProfileUser from "./ProfileUser"
import ProfilePost from "./ProfilePost"
import React from 'react';

export default class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    
    state = {
        posts: [],
        user: [],
        isMe: false
    }

    profilePicDidChange = async (image) => {
        const imageData = new FormData()
        imageData.append("file", image);
        await axios.post("/images/profile", imageData, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        // Reload user data
        this.componentDidMount();
    }

    componentDidMount(){
        axios.get(`/users/user/${this.props.user.user_id}`, {
            headers: {
                user: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>{
            const user = res.data;
            this.setState({user});
        });

        axios.get(`/post/user/${this.props.user.user_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>{
            const posts = res.data;
            this.setState({posts});
        });
        if (this.props.user.user_id === "me") {
            this.setState({isMe: true})
        }
    };

    render(){
        return (
            <div className="profile"> 
                {/* Header */}
                {this.state.user.map((user) =>(
                    <Header headerText={user.username}/>,
                    <ProfileUser user={user} isMe={this.state.isMe} profilePicDidChange={this.profilePicDidChange} />
                ))}
                {this.state.posts.map((post) =>(
                    <ProfilePost key={post.post_id} post={post} displayProfile={this.props.displayProfile} displayPost={this.props.displayPost}/>
                ))}
            </div>
        );
    }
}
