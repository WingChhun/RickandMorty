import React from 'react';
import ReactDOM from 'react-dom';
//import "index.css";
import "./main.css";
import registerServiceWorker from './registerServiceWorker';

//import components
import Router from "./containers/Router";

//render
ReactDOM.render(
    <Router/>, document.getElementById('root'));
registerServiceWorker();
