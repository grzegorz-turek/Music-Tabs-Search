import React from 'react';
import './SearchBar.scss';
import CheckMark from '../../common/CheckMark/CheckMark';

const SearchBar = (props) => (
    
    <div className='search-bar'>

        <div className='search-bar__container'>

            <div className='search-bar__container__box'>

                <input
                    className='search-bar__container__box__input'
                    type='text'
                    placeholder='artist and / or song title'
                    aria-label='Type Artist Or Song Title'
                    onChange={props.saveSearchCriteria}
                    onKeyPress={props.handleKeyPressed}
                />

                <div className='search-bar__container__box__button' onClick={props.handleFetch}>
                    search
                </div>

            </div>

            <div className='search-bar__container__box'>
                <div className='search-bar__container__box__checkbox'>
                    <div className='search-bar__container__box__checkbox__box'>
                        {props.searchForTabs.player ? <CheckMark /> : null }
                    </div>
                    <div className='search-bar__container__box__checkbox__cover' onClick={() => props.handleToggleCheckBox(0)}></div>
                    <div className='search-bar__container__box__checkbox__label'>player</div>
                </div>

                <div className='search-bar__container__box__checkbox'>
                    <div className='search-bar__container__box__checkbox__box'>
                        {props.searchForTabs.guitar ? <CheckMark /> : null }
                    </div>
                    <div className='search-bar__container__box__checkbox__cover' onClick={() => props.handleToggleCheckBox(1)}></div>
                    <div className='search-bar__container__box__checkbox__label'>guitar</div>
                </div>

                <div className='search-bar__container__box__checkbox'>
                    <div className='search-bar__container__box__checkbox__box'>
                        {props.searchForTabs.chords ? <CheckMark /> : null }
                    </div>
                    <div className='search-bar__container__box__checkbox__cover' onClick={() => props.handleToggleCheckBox(2)}></div>
                    <div className='search-bar__container__box__checkbox__label'>chords</div>
                </div>

                <div className='search-bar__container__box__checkbox'>
                    <div className='search-bar__container__box__checkbox__box'>
                        {props.searchForTabs.bass ? <CheckMark /> : null }
                    </div>
                    <div className='search-bar__container__box__checkbox__cover' onClick={() => props.handleToggleCheckBox(3)}></div>
                    <div className='search-bar__container__box__checkbox__label'>bass</div>
                </div>

            </div>

        </div>

    </div>
)

export default SearchBar;