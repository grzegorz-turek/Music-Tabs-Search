import React from 'react';
import MainLayout from '../components/layout/MainLayout/MainLayout';

class App extends React.Component {

    state = {
        searchRequest: [],
        searchResults: [],
        searchResultsPrevious: [],
        searchResultsFiltered: [],
        searchForTabs: {
            player: true,
            guitar: false,
            chords: false,
            bass: false
        }
    }

    handleFetch = () => {

        if (this.state.searchRequest) {

            // ------------- UNCOMMENT THE LINE BELOW IF CORS PROBLEM ENCOUNTERED -------------
            //const corsUrl = 'https://cors-anywhere.herokuapp.com/';

            const apiUrl = 'https://www.songsterr.com/a/ra/songs.json?pattern=';

            // ------------- UNCOMMENT THE PART BELOW IF CORS PROBLEM ENCOUNTERED -------------
            fetch(/*corsUrl + */apiUrl + this.state.searchRequest)
            .then(res => res.json())
            .then(res => this.setState({ searchResults: res }))
            .then(() => this.filterSearchResults())

            .catch(err => {
                console.log('We\'ve got fetch error Madam or Sir')
            })

        }

    }

    filterSearchResults = () => {

        const searchResultsFilteredToArr = this.state.searchResults.filter(searchResult =>

            (this.state.searchForTabs.player ? (searchResult.tabTypes).includes('PLAYER') : false) ||
            (this.state.searchForTabs.guitar ? (searchResult.tabTypes).includes('TEXT_GUITAR_TAB') : false) ||
            (this.state.searchForTabs.chords ? (searchResult.tabTypes).includes('CHORDS') : false) ||
            (this.state.searchForTabs.bass ? (searchResult.tabTypes).includes('TEXT_BASS_TAB') : false)

        );
        this.setState({ searchResultsFiltered: searchResultsFilteredToArr})

    }

    saveSearchCriteria = (event) => {
        this.setState( { searchRequest : event.target.value});
    }

    handleToggleCheckBox = async (arg) => {

        switch(arg) {

            case 0:
                await this.setState( !this.state.searchForTabs.player ? { searchForTabs: { player: true, guitar: false, chords: false, bass: false } } : null );
                break;
            case 1:
                await this.setState( !this.state.searchForTabs.guitar ? { searchForTabs : { player: false, guitar: true, chords: false, bass: false } } : null );
                break;
            case 2:
                await this.setState( !this.state.searchForTabs.chords ? { searchForTabs : { player: false, guitar: false, chords: true, bass: false } } : null );
                break;
            case 3:
                await this.setState( !this.state.searchForTabs.bBass ? { searchForTabs : { player: false, guitar: false, chords: false, bass: true } } : null );
                break;
            default:
                return;

        }
        this.filterSearchResults();

    };

    handleKeyPressed = (event) => {

        if (event.key === "Enter") {

            if (this.state.searchRequest && this.state.searchRequest === event.target.value) {
                this.handleFetch();
            }

        }

    }

    render() {

        return (

            <div>

                <MainLayout
                    saveSearchCriteria={this.saveSearchCriteria}
                    handleToggleCheckBox={(arg) => this.handleToggleCheckBox(arg)}
                    handleKeyPressed={this.handleKeyPressed}
                    handleFetch={this.handleFetch}
                    searchForTabs={this.state.searchForTabs}
                    searchResultsFiltered={this.state.searchResultsFiltered}
                />

            </div>

        )

    }

}

export default App;
