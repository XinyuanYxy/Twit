import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import {useState} from 'react';
import Sidebar from '../Sidebar';
import Feed from '../Homepage/Feed';
import FullPost from "../Homepage/FullPost";
import Profile from "../Profile/Profile";
import Search from "../Search/search";
function AuthRouter() {
    const [currentPost, setCurrentPost] = useState({
        id: 0,
        displayname: 'Undefined',
        username: 'Undefined',
        avatar: null,
        text: 'Undefined'
    });

    const [user, setUser] = useState({
        user_id: 0
    })

    const displayPost = (post) =>{
        setCurrentPost(post);
    }

    const displayProfile = (user) =>{
        setUser({
            user_id: user.user_id,
        });
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* sidebar */}
                    <Sidebar currentPage={0} displayProfile={displayProfile}/>
                    {/* feed */}
                    <Feed displayPost={displayPost} displayProfile={displayProfile}/>
                </Route>
                <Route exact path="/post">
                    <Sidebar currentPage={1}/>
                    <FullPost post={currentPost} displayProfile={displayProfile}/>
                </Route>
                <Route exact path="/profile">
                    <Sidebar currentPage={2}/>
                    <Profile user={user} displayPost={displayPost}/>
                </Route>
                <Route exact path="/profile/me">
                <Sidebar currentPage={2}/>
                    <Profile user={{user_id: "me"}} displayPost={displayPost}/>
                </Route>
                <Route exact path="/search">
                    <Sidebar currentPage={3}/>
                    <Search displayProfile={displayProfile}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AuthRouter;