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
        isMe: false,
        isFollowing: false
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

    setFollowing = (follow) =>{
        if(follow){
            const filler = {
                content: ""
            }
            axios.post(`/follow/${this.props.user.user_id}`, filler, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => {
                this.componentDidMount();
            })
        }else{
            axios.delete(`/follow/unfollow/${this.props.user.user_id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res => {
                this.componentDidMount();
            })
        }
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
        }else{
            axios.get(`/follow/user/${this.props.user.user_id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).then(res =>{
                console.log("FOLLOWING: " + res.data);
                this.setState({isFollowing: (res.data != null && res.data.length > 0)});
            });
        }
    };

    render(){
        return (
            <div className="profile"> 
                {/* Header */}
                {this.state.user.map((user) =>(
                    <Header headerText={user.username}/>,
                    <ProfileUser user={user} isMe={this.state.isMe} setFollowing={this.setFollowing} isFollowing={this.state.isFollowing} profilePicDidChange={this.profilePicDidChange} />
                ))}
                {this.state.posts.map((post) =>(
                    <ProfilePost key={post.post_id} post={post} displayProfile={this.props.displayProfile} displayPost={this.props.displayPost}/>
                ))}
            </div>
        );
    }
}
