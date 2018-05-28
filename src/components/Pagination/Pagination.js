import React, {Component} from 'react';
import "../../main.css";
class Pagination extends Component
{

    render()
    {
        return (
            <div className="pagination">

                <p className="pagination__left">Previous</p>
                <p className="pagination__right">Next</p>
            </div>

        );
    }

}

export default Pagination;