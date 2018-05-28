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
                    placeholder="Enter a name to filter for on this page"/>
            </div>

        );
    }

}

export default Searchbox;