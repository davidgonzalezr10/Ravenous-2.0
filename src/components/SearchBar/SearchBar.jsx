import React from 'react';

const SearchBar = () => {

    const renderSortByOptions = () => {
        return (
            <>
                <li className="text-center relative hover:text-card-bg transition-colors pb-2 after:content-[''] after:absolute after:bottom-0 after:left-[-80px] after:right-[-80px] after:h-[1px] after:bg-white hover:after:bg-card-bg after:transition-colors">
                    <span className="block leading-tight">Best</span>
                    <span className="block leading-tight">Match</span>
                </li>
                <li className="text-center relative hover:text-card-bg transition-colors pb-2 after:content-[''] after:absolute after:bottom-0 after:left-[-80px] after:right-[-80px] after:h-[1px] after:bg-white hover:after:bg-card-bg after:transition-colors">
                    <span className="block leading-tight">Highest</span>
                    <span className="block leading-tight">Rated</span>
                </li>
                <li className="text-center relative hover:text-card-bg transition-colors pb-2 after:content-[''] after:absolute after:bottom-0 after:left-[-80px] after:right-[-80px] after:h-[1px] after:bg-white hover:after:bg-card-bg after:transition-colors">
                    <span className="block leading-tight">Most</span>
                    <span className="block leading-tight">Reviewed</span>
                </li>
            </>
        )
    }

    return (
        <div className='pt-20 pb-20'>
            <ul className='flex justify-center xl:gap-40 md:gap-20 sm:gap-20 pb-10 font-bold'>
                {renderSortByOptions()}
            </ul>
            <form className='px-50'>
                <div className='flex justify-center gap-12 pb-10'>
                    <input placeholder='Search Businesses' className='bg-white text-gray-600 rounded-sm py-3 px-4 w-lg'/>
                    <input placeholder='Where?' className='bg-white text-gray-600 rounded-sm py-3 px-4 w-lg'/>
                </div>
                <div className='flex justify-center'>
                    <button id="search-button" type="submit" className='py-3 px-8 bg-card-bg hover:bg-button-hover rounded-sm transition-colors'>Let's Go</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;