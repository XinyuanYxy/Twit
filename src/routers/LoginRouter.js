import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Login from '../Login';

function LoginRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default LoginRouter;