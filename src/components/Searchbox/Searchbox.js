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
                    placeholder="Enter a name to search or filter for"/>
            </div>

        );
    }

}

export default Searchbox;