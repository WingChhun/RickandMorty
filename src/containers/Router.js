import React, {Component} from 'react';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

//import component
import Main from "./Main";

class Router extends Component {

    componentWillMount()
    {
        //TODO: SEt the document title to custom config
        document.title = "React - Rick and Morty ";
    }
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