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

    const [user, setUser] = useState({
        id: 0,
        displayname: 'Chris',
        username: '@yxychr',
        avatar: null,
        description: 'Just a person doin\' their thing'
    })

    const displayPost = (post) =>{
        setCurrentPost(post);
    }

    const displayProfile = (post) =>{
        console.log(post)
        setUser({
            id: 0,
            displayname: post.displayname,
            username: post.username,
            avatar: post.avatar,
            description: 'Just a person doin\' their thing'
        });
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* sidebar */}
                    <Sidebar currentPage={0}/>
                    {/* feed */}
                    <Feed displayPost={displayPost} displayProfile={displayProfile}/>
                </Route>
                <Route exact path="/post">
                    <Sidebar currentPage={1}/>
                    <FullPost post={currentPost} displayPost={displayPost} displayProfile={displayProfile}/>
                </Route>
                <Route exact path="/profile">
                    <Sidebar currentPage={2}/>
                    <Profile user={user}/>
                </Route>
                <Route exact path="/search">
                    <Sidebar currentPage={3}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AuthRouter;