import React, {Component} from 'react';
import PropTypes from 'prop-types';

// functional stateless component set Card to null by default if nothing is
// passed
const Card = ({
    Card = null
}) => {

    return (
        <div className="card">
            {/*Error message*/}
            {(Card === null && <h1>
                No Data</h1>)}

            {/*ELSE - Display card*/}
            <h1>{Card.name}</h1>
        </div>

    );

}
//proptypes check
Card.propTypes = {

    Card: PropTypes
        .shape({created: PropTypes.string.isRequired, gender: PropTypes.string.isRequired, id: PropTypes.number.isRequired, name: PropTypes.string.isRequired})
        .isRequired

};
//propTypes export Card
export default Card;