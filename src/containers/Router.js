import React, {Component} from 'react';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

//import component
import Main from "./Main";

class Router extends Component {

    render()
    {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>

                    <Route exact path="/" component={Main}></Route>
                </Switch>
            </BrowserRouter>
        );

    }
}
export default Router;