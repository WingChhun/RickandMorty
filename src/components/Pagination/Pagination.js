import React, {Component} from 'react';
import "../../main.css";
class Pagination extends Component
{

    render()
    {
        return (
            <div className="pagination">

                <p className="pagination__left"><i className="fa  fa-angle-double-left"/>   Previous</p>
                <p className="pagination__right">
                Next   <i className="fa  fa-angle-double-right"/></p>
            </div>

        );
    }

}

export default Pagination;