import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Widgets from '../Widgets';

function AuthRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* sidebar */}
                    <Sidebar />
                    {/* feed */}
                    <Feed />
                    {/* widgets */}
                    <Widgets />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AuthRouter;