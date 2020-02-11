import React from 'react';
import SearchBar from '../../features/SearchBar/SearchBar';
import SearchResultsBox from '../../features/SearchResultsBox/SearchResultsBox';

const MainLayout = (props) => (

    <div className='main-layout'>

        <SearchBar
            saveSearchCriteria={props.saveSearchCriteria}
            handleToggleCheckBox={(arg) => props.handleToggleCheckBox(arg)}
            handleKeyPressed={props.handleKeyPressed}
            handleFetch={props.handleFetch}
            searchForTabs={props.searchForTabs}
        />

        <SearchResultsBox
            searchResultsFiltered={props.searchResultsFiltered}
            searchForTabs={props.searchForTabs}
        />

    </div>
)

export default MainLayout;