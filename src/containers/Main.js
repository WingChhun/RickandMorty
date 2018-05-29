import React, {Component} from 'react';

import "../main.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
//import components main class

import Navigation from "../components/Navigation/Navigation";
import Searchbox from "../components/Searchbox/Searchbox";
import CardList from "../components/Cards/CardList";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";

class Main extends Component
{

    /*
 - Initialize state
  - info object that holds
  - initialized starter data following API format
         - to pass proptype tests
  */
    state = {
        info: {
            count: 0
        },
        results: [],
        totalresults: [],
        characters: [], //hold characters
        //locations and episodes will be expanded upon
        locations: [], //hold locations
        episodes: [], //hold episodes
        searchBox: "",
        Connected: false,
        page: 1
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
        // expect info to be an object expect results to be an array update API set Also
        const {Connected} = this.state;
        // change COnnected to true, signaling we have contacted the API state
        this.setState({
            ...this.state,
            info,
            results,
            characters: results, //extra
            Connected: !Connected
        });

        //debug output to console
        console.log("State - INFO", this.state.info);
        console.log("State - results", this.state.results);
        console.log("State - Connected", this.state.Connected);
    }
    //updatePage
    nextPage = () => {
        let page = (this.state.page < 25
            ? this.state.page + 1
            : this.state.page)
        this.setState({
            ...this.state,
            page

        });
        console.log("Page", this.state.page);
    }
    prevPage = () => {
        let page = (this.state.page > 1
            ? this.state.page - 1
            : this.state.page);
        this.setState({
            ...this.state,
            page
        });
        console.log("Page", this.state.page);
    }
    //update Connected
    render()
    {
        {/*Clean up and store functions into const variables*/
        }
        const updateSearch = this.updateSearch;
        const updateAPI = this.updateAPI;
        const updatePage = this.updatePage;
        return (

            <div>
                <Navigation/>

                <Searchbox searchBox={this.state.searchBox} updateSearch ={updateSearch}/> {/*CardList*/}
                <Pagination
                    page={this.state.page}
                    nextPage
                    ={this.nextPage}
                    prevPage={this.prevPage}
                    updateAPI={updateAPI}/> {/*Show Error*/}
                {(!this.checkConnected && <h1>Loading Data...</h1>)}
                <CardList
                    page={this.state.page}
                    searchBox
                    ={this.state.searchBox}
                    infoAPI={this.state.info}
                    resultsAPI
                    ={this.state.results}
                    isConnected={this.state.Connected}updateAPI={updateAPI}/> {/*Pagination*/}
                <Pagination
                    page={this.state.page}
                    nextPage
                    ={this.nextPage}
                    prevPage={this.prevPage}
                    updateAPI={updateAPI}/>
                <Footer/>

            </div>

        );

    } // !- END RENDER
    /*
 TODO: Return boolean value depending on state.Connected, have interval
        */
    checkConnected = () => {
        setInterval(() => {
            // * Return true if Connected is true after 1s
            return (this.state.Connected
                ? true
                : false);
        }, 800);
    }
}

export default Main;