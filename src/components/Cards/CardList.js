import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../main.css"; //import css
//import card component
import Card from "./Card";

const API_URL = "https://rickandmortyapi.com/api/character/";
let API_INFO = {};
let API_RESULTS = [];
class CardList extends Component
{
    constructor(props)
    {
        super(props);
        this.updateAPI = this.props.updateAPI;

    }
    //handle API
    async componentDidMount()
    {

        const res = await fetch(API_URL);
        const {info, results} = await res.json();

        //set state, using function passed from main container
        this
            .props
            .updateAPI(info, results);

        //SEt API_INFO and API_RESULTS
        // - Will be used for Card mapping
        API_INFO = info;
        API_RESULTS = results;
        //DEBUG
        console.log("this.props.accessAPI", this.props.accessAPI);
        console.log("API_INFO", API_INFO);
        console.log("API_RESULTS", API_RESULTS);
    }
    // @function mapCards @Purpose - Return Cards as List Items using
    // this.state.results
    render()
    {
        const {isConnected, resultsAPI, searchBox} = this.props;

        return (
            <div className="cardlist u--border-primary">

                {/*Display error message if not connected to API*/}
                {(!this.props.isConnected && <h1>Could not connect to the API!</h1>)}

                {/*Else render the cards*/}
                {resultsAPI.map((card, index) => <Card Card={card} key ={card.id} searchBox={searchBox}>CardItem</Card>)}
            </div>

        );
    }
}
/* Proptypes check - Check info to receive an
            object - is connected to receive a boolean - updateAPI to receive a function */
CardList.propTypes = { //access this.state.info
    infoAPI: PropTypes
        .shape({count: PropTypes.number.isRequired})
        .isRequired,
    isConnected: PropTypes.bool.isRequired,
    updateAPI: PropTypes.func.isRequired,
    resultsAPI: PropTypes.array.isRequired
}
export default CardList;