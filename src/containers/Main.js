import React, {Component} from 'react';

import "../main.css";

//import components main class

import Navigation from "../components/Navigation/Navigation";
import Searchbox from "../components/Searchbox/Searchbox";
import CardList from "../components/Cards/CardList";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";

class Main extends Component
{

    //initialize state
    state = {
        info: {},
        results: [],
        searchBox: "None"
    }

    updateSearch = (e) => {
        //Show target
        const searchBox = e
            .target
            .value
            .trim(); //remove spaces

        // update state.searchbox - use spread operator to copy state and update
        // searchbox
        this.setState({
            ...this.state,
            searchBox
        });
        console.log("State searchbox", this.state.searchBox);

    }

    // @function updateAPI @PURPOSE - pass as prop into CardList where API is
    // handled, update global state
    updateAPI = (info, results) => {
        // expect info to be an object expect results to be an array update API set
        // state
        this.setState({
            ...this.state,
            info,
            results
        });

        //debug output to console
        console.log("State - INFO", this.state.info);
        console.log("State - results", this.state.results);

    }

    render()
    {
        {/*Clean up and store functions into const variables*/
        }
        const updateSearch = this.updateSearch;
        const updateAPI = this.updateAPI;
        return (

            <div>
                <Navigation/>

                <Searchbox searchBox={this.state.searchBox} updateSearch ={updateSearch}/> {/*CardList*/}
                <CardList updateAPI={updateAPI} accessAPI ={this.state.results}/> {/*Pagination*/}
                {/*Pagination*/}
                {/*Footer*/}

            </div>

        );
    }

}

export default Main;