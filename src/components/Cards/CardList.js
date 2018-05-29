import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../main.css"; //import css
//import card component
import Card from "./Card";

const API_URL = "https://rickandmortyapi.com/api/character/?page=";
let API_INFO = {};
let API_RESULTS = [];
class CardList extends Component
{
    //TODO: Constructor
    constructor(props)
    {
        super(props);
        this.updateAPI = this.props.updateAPI;
        this.page = this.props.page;
    }
    //TODO: componentDidMount - API CALL
    async componentDidMount()
    {

        const res = await fetch(`${API_URL}${this.page}`);
        const {info, results} = await res.json();

        //set state, using function passed from main container
        this
            .props
            .updateAPI(info, results);

        // * DEBUG
        API_INFO = info;
        API_RESULTS = results;
        // DEBUG console.log("this.props.accessAPI", this.props.accessAPI);
        // console.log("API_INFO", API_INFO); console.log("API_RESULTS", API_RESULTS);
    }

    //TODO: @Function to filter resultsAPI using searchbox value
    filterResults = (resultsAPI, searchBox) => {
        // * Given this.state.results
        // * Given this.state.searchbox
        if (searchBox == "") {
            return resultsAPI;
        } else if (searchBox != "") {
            //* Searchbox contains a value filter resultsAPI
            searchBox = searchBox
                .trim()
                .toLowerCase();
            return resultsAPI.filter((value) => {
                let temp = value
                    .name
                    .trim()
                    .toLowerCase(); //* pull name and remove space(s)

                return temp.includes(searchBox);
            });
        }
    }

    // TODO: @function mapCards @Purpose - Return Cards as List Items using
    // this.state.results
    render()
    {
        const {isConnected, resultsAPI, searchBox} = this.props;

        return (
            <div className="cardlist">

                {/*Display error message if not connected to API*/}
          

                {/*Else render the cards*/}
                {this
                    .filterResults(resultsAPI, searchBox)
                    .map((card, index) => <Card Card={card} key={card.id} searchBox={searchBox}/>)}
                {/*resultsAPI.map((card, index) => <Card Card={card} key ={card.id} searchBox={searchBox}>CardItem</Card>)*/}
            </div>

        );
    }
}
// TODO: Proptypes check - Check info to receive an     object - is connected to
// receive a boolean - updateAPI to receive a function */
CardList.propTypes = { //access this.state.info
    infoAPI: PropTypes
        .shape({count: PropTypes.number.isRequired})
        .isRequired,
    isConnected: PropTypes.bool.isRequired,
    updateAPI: PropTypes.func.isRequired,
    resultsAPI: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired
}
export default CardList;