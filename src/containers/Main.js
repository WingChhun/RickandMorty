import React, {
    Component
} from 'react';
//import logo from './logo.svg'; import '../App.css';
import "../main.css";

//import all components

import Navigation from "../components/Navigation/Navigation";
import Searchbox from "../components/Searchbox";
import CardList from "../components/Cards/CardList";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";

//base API URL
const API_URL = "https://rickandmortyapi.com/api/character";

class Main extends Component {

    //intitialize state
    state = {
        info: {},
        results: []
    }
    //handle API here

    async componentDidMount() {
        try {
            const res = await fetch(API_URL);
            const {
                info,
                results
            } = await res.json(); //destructure object
            //set state
            this.setState({
                info,
                results
            });
            console.log(this.state);
        } catch (e) {
            console.log(e);
        }

    }

    render() {
        return ( <
            div >

            { /*<Navigation/>*/ } { /*<SearchBox*/ } { /*CardList*/ } { /*Pagination*/ } { /*Footer*/ }

            <
            h1 >
            Main component < /h1>

            <
            /div>
        );
    }
}

export default Main;