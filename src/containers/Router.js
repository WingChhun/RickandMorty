import React, {Component} from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';

//import components to render
import App from "../containers/App";
import Main from "./Main";
class Router extends Component
{

    render()
    {

        return (

            <BrowserRouter basename ={process.env.PUBLIC_URL}>

                <Switch>

                    <Route exact path="/" component={Main}/>

                </Switch>

            </BrowserRouter>

        )

    }

}

export default Router;