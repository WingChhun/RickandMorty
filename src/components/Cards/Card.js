import React, {Component} from 'react';
import PropTypes from 'prop-types';

// functional stateless component set Card to null by default if nothing is
// passed
const Card = ({
    Card = null,
    searchBox = ""
}) => {
    this.returnElements = (Card) => {
        return (
            <ul className="card__list--container">
                <li className="card__list--item">
                    <p className="card__list--item--key">Species</p>
                    <p className="card__list--item--value">{Card.species}</p>

                </li>
                <li className="card__list--item">
                    <p className="card__list--item--key">Gender</p>
                    <p className="card__list--item--value">{Card.gender}</p>

                </li>
                <li className="card__list--item">
                    <p className="card__list--item--key">Origin</p>
                    <p className="card__list--item--value">{Card.origin.name}</p>

                </li>
                <li className="card__list--item">
                    <p className="card__list--item--key">Location</p>
                    <p className="card__list--item--value">{Card.location.name}</p>

                </li>
            </ul>
        )
    };
    return (
        <div className="card">
            {/*Error message*/}
            {(Card === null && <h1>
                No Data</h1>)}

            {/*ELSE - Display card*/}

            {/*Card__img and Name should be bundled together*/}
            <img className="card__img" alt={Card.name} src={Card.image}/>
            <h3 className="card__name">{Card.name}</h3>

            {/*Card__list-container, hold key and value pairs*/}
            {this.returnElements(Card)}
        </div>

    );

}
//proptypes check
Card.propTypes = {

    Card: PropTypes
        .shape({created: PropTypes.string.isRequired, gender: PropTypes.string.isRequired, id: PropTypes.number.isRequired, name: PropTypes.string.isRequired})
        .isRequired,
    searchBox: PropTypes.string.isRequired

};
//propTypes export Card
export default Card;