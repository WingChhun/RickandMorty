import React, {Component} from 'react';
import PropTypes from 'prop-types';
const API_URL = "https://rickandmortyapi.com/api/character/?page=";
class Pagination extends Component
{

    async newRequest()
    {
        const res = await fetch(`${API_URL}${this.props.page}`);
        const {info, results} = await res.json();

        this
            .props
            .updateAPI(info, results);
    }
    makeRequestAndPrevPage = () => {
        this
            .props
            .prevPage();

        this.newRequest();
    }
    makeRequestAndNextPage = () => {
        this
            .props
            .nextPage();

        this.newRequest();
    }
    render()
    {
        //pull from props
        const {page, nextPage, prevPage} = this.props;
        return (         <div className="pagination">

        <p onClick = {this.makeRequestAndPrevPage}className="pagination__left"><i className="fa  fa-angle-double-left"/>
            Previous</p>
        <p onClick = {this.makeRequestAndNextPage} className="pagination__right">
            Next
            <i className="fa  fa-angle-double-right"/></p>
    </div>);
    }

}

export default Pagination;

//prop type check
Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired

};