import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login/Login";

export const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact={true} path="/Login" component={Login} />
            </Switch>
        </React.Fragment>
    );
}