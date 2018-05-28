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
                    placeholder="Enter a name to filter for on this page"/> {/*Font*/}
                <p className="searchbox__under">This app is meant to be displayed on desktop, and was built using the
                    <a href="rickandmortyapi.com"> Rick and Morty API
                    </a>
                </p>

            </div>

        );
    }

}

export default Searchbox;