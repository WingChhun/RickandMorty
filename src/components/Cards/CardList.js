import React, {Component} from 'react';

import "../../main.css"; //import css
//import card component
import Card from "./Card";

const API_URL = "https://rickandmortyapi.com/api/character/";
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
        console.log("this.props.accessAPI", this.props.accessAPI);
    }
    render()
    {

        return (
            <div className="cardlist">
                <h1>CardList</h1>
                <Card/>

            </div>

        );
    }

}

export default CardList;