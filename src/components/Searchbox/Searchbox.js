import React, {Component} from 'react';

class Searchbox extends Component
{

    render()
    {
        //destructure props
        const {searchBox, updateSearch} = this.props;

        return (
            <div className="searchbox">
                <input
                    type="text"
                    onChange={updateSearch}
                    placeholder="search for a character"/>
            </div>

        );
    }

}

export default Searchbox;