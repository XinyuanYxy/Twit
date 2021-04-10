import {useState} from 'react';
import React from 'react';
import "./Feed.css";
import TweetBox from '../TweetBox';
import FeedPost from "./FeedPost";
import Header from '../Header';
import axios from '../api/axios';
import { render } from '@testing-library/react';

export default class Feed extends React.Component{

    constructor(props){
        super(props);
    }

    state = {
        posts: []
    }

    componentDidMount(){
        axios.get("/post", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res =>{
            const posts = res.data;
            this.setState({posts});
        })
    }

    render(){
    return (
        <div className="feed"> 
           <Header headerText="Home"/>
            {/* TweetBox */}
            <TweetBox/>

            {/* post */}
            {//Posts have post_id, user_id, date, content, picture_id, fname, profile_picture_id and username
            this.state.posts.map(post =>(
                <FeedPost key={post.post_id} post={post} displayPost={this.props.displayPost} displayProfile={this.props.displayProfile}/>
            ))}
        </div>
    );
            }
}