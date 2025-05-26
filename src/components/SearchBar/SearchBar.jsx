import searchbarBg from '../../assets/searchbarBg.png';
import React, { useState } from 'react';

const SearchBar = () => {

    const [term, setTerm] = useState('')
    const [location, setLocation] = useState('')
    const [sortBy, setSortBy] = useState('best_match')

    const sortByOptions = ['best_match', 'rating', 'review_count'];
    
    const sortByDisplayNames = {
        'best_match': 'Best Match',
        'rating': 'Highest Rated',
        'review_count': 'Most Reviewed'
    };

    const getSortByClass = (sortByOption) => {
        if (sortBy === sortByOption) {
            return 'text-header-bg after:bg-header-bg after:transition-colors';
        } else {
            return 'text-white after:bg-white hover:after:bg-header-bg after:transition-colors hover:text-header-bg';
        }
    };

    const handleSortChange = (sortByOption) => {
        setSortBy(sortByOption);        
    };

    const handleTermChange = ({ target }) => {
        setTerm(target.value)        
    }

    const handleLocationChange = ({ target }) => {
        setLocation(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
        setTerm('');
        setLocation('');
    }

    const renderSortByOptions = () => {
        return (
            sortByOptions.map((option) => (
                <li
                    key={option}
                    className={`text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-[-80px] after:right-[-80px] after:h-[1px] ${getSortByClass(option)}`}
                    onClick={() => handleSortChange(option)}
                >
                    {sortByDisplayNames[option].split(' ').map((word, index) => (
                        <span key={index} className="block leading-tight">{word}</span>
                    ))}
                </li>
            ))
        );
    };

    return (
        <div className='pt-20 pb-20 w-full h-150 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center' style={{ backgroundImage: `url(${searchbarBg})` }}>
            <ul className='flex justify-center xl:gap-40 md:gap-20 sm:gap-20 pb-15 font-bold text-lg'>
                {renderSortByOptions()}
            </ul>
            <form className='px-50 text-lg' onSubmit={handleSubmit}>
                <div className='flex justify-center gap-12 pb-15'>
                    <input 
                        placeholder='Search Businesses' 
                        className='bg-white text-gray-600 rounded-sm py-3 px-4 w-lg' 
                        onChange={handleTermChange}
                        value={term}
                    />
                    <input 
                        placeholder='Where?' 
                        className='bg-white text-gray-600 rounded-sm py-3 px-4 w-lg' 
                        onChange={handleLocationChange}
                        value={location}
                    />
                </div>
                <div className='flex justify-center'>
                    <button id="search-button" type="submit" className='py-3 px-8 bg-header-bg hover:bg-button-hover rounded-sm transition-colors'>Let's Go</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;