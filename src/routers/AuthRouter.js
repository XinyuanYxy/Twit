import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import {useState} from 'react';
import Sidebar from '../Sidebar';
import Feed from '../Homepage/Feed';
import FullPost from "../Homepage/FullPost";
import Profile from "../Profile";

function AuthRouter() {
    const [currentPost, setCurrentPost] = useState({
        id: 0,
        displayname: 'Undefined',
        username: 'Undefined',
        avatar: null,
        text: 'Undefined'
    });

    const url = "localhost:3000"

    const displayPost = (post) =>{
        setCurrentPost(post);
        window.location.href = "post";
    }

    const setUrl = (extension) =>{
        window.location.href = extension;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* sidebar */}
                    <Sidebar setUrl={setUrl} currentPage={0}/>
                    {/* feed */}
                    <Feed displayPost={displayPost}/>
                </Route>
                <Route exact path="/post">
                    <Sidebar setUrl={setUrl} currentPage={1}/>
                    <FullPost post={currentPost} displayPost={displayPost}/>
                </Route>
                <Route exact path="/profile">
                    <Sidebar setUrl={setUrl} currentPage={2}/>
                    <Profile />
                </Route>
                <Route exact path="/search">
                    <Sidebar setUrl={setUrl} currentPage={3}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AuthRouter;