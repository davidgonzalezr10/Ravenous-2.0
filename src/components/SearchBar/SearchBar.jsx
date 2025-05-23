import React from 'react';

const SearchBar = () => {

    const renderSortByOptions = () => {
        return (
            <>
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Reviewed</li>
            </>
        )
    }

    return (
        <div className='SearchBar'>
            <div className='SearchBar-sort-options'>
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <form>
                <div className='SearchBar-fields'>
                    <input placeholder='Search Businesses'/>
                    <input placeholder='Where?' />
                </div>
                <div className='SearchBar-submit'>
                    <button id="search-button" type="submit">Let's Go</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;