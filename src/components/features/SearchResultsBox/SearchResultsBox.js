import React from 'react';
import './SearchResultsBox.scss';
import SearchResultsMapping from '../SearchResultsMapping/SearchResultsMapping';

const SearchResultsBox = (props) => (

    <div className='search-results-box'>

        <div className='search-results-box__container'>

            <div className='search-results-box__container__items-found-count'>
                {props.searchResultsFiltered.length === 0 ? `nothing found yet, enter or change search criteria` : `${props.searchResultsFiltered.length} songs found`}
            </div>

            <SearchResultsMapping searchResultsFiltered={props.searchResultsFiltered} />

        </div>

    </div>

)

export default SearchResultsBox;