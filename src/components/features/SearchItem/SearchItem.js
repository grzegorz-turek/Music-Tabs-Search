import React from 'react';
import './SearchItem.scss';

class SearchItem extends React.Component {

    render() {

        const switchedFunction = (arg) => {

            // eslint-disable-next-line
            switch (arg) {
                case 'PLAYER':
                    return 'player';
                    // eslint-disable-next-line
                    break;
                case 'TEXT_GUITAR_TAB':
                    return 'guitar';
                    // eslint-disable-next-line
                    break;
                case 'CHORDS':
                    return 'chords';
                    // eslint-disable-next-line
                    break;
                case 'TEXT_BASS_TAB':
                    return 'bass';
                    // eslint-disable-next-line
                    break;
                default:
                    return;
            }
            
        }

        const newArr = this.props.searchitem.tabTypes.map(item => switchedFunction(item));
        const newArrFormatted = newArr.join(', ');

        return (
            <div className='search-item'>

                <div className='search-item__artist'>
                    <h1><b>{this.props.searchitem.artist.name}</b></h1>
                </div>

                <div className='search-item__title'>
                    <h2>{this.props.searchitem.title}</h2>
                </div>

                <div className='search-item__tabs'>
                    tabs available: {newArrFormatted}
                </div>

                <div className='search-item__link'>
                    <a href={`http://www.songsterr.com/a/wa/song?id=${this.props.searchitem.id}`} target='blank'>Go to tabs!</a>
                </div>

            </div>

        )

    }

}

export default SearchItem;