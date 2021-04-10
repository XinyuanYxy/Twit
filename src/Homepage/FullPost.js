import React from 'react';
import {useState} from 'react';
import "./FullPost.css";
import Post from "./Post";
import Reply from "./Reply";
import Header from '../Header';
import axios from '../api/axios';
import ReplyBox from '../ReplyBox';
export default class FullPost extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
        replies: []
    }

    componentDidMount(){
        axios.get(`/reply/post/${this.props.post.post_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>{
            const replies = res.data;
            this.setState({replies});
        })
    }

    render(){
        return (
            <div className="fullpost"> 
                <Header headerText="Tweeter"/>
                {/* post */}
                <div className="fullpost-container">
                    <Post post={this.props.post} displayProfile={this.props.displayProfile}/>
                    <ReplyBox post={this.props.post}/>
                    {/* replies */}
                    {this.state.replies.map((reply) =>(
                        <Reply key={reply.id} reply={reply} replyname={this.props.post.username} displayProfile={this.props.displayProfile}/>
                    ))}
                </div>
            </div>
        );
    }
}