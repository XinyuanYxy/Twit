import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Widgets from '../Widgets';
import Search from '../Search/search';

function AuthRouter() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Switch>
                {/* sidebar */}
                {/* feed */}
                {/* widgets */}
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route exact path="/search">
                    <Search />
                </Route>
            </Switch>
            <Widgets />
        </BrowserRouter>
    );
}

export default AuthRouter;