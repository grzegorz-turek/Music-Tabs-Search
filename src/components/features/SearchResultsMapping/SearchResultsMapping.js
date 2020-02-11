import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import './SearchResultsMapping.scss';

const SearchResultsMapping = (props) => (

    <div className='search-results-mapping'>

        {props.searchResultsFiltered.map(searchitem =>

            <SearchItem
                key={searchitem.id}
                searchitem={searchitem} 
            />

        )}

    </div>

)

export default SearchResultsMapping;