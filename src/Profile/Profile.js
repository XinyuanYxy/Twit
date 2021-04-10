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
        user: []
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

    };

    render(){
        return (
            <div className="profile"> 
                {/* Header */}
                {this.state.user.map((user) =>(
                    <Header headerText={user.username}/>,
                    <ProfileUser user={user}/>
                ))}
                {this.state.posts.map((post) =>(
                    <ProfilePost key={post.post_id} post={post} displayPost={this.props.displayPost}/>
                ))}
            </div>
        );
    }
}
