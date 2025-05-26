import headerBg from '../assets/headerBg.png';
import React, { useState } from 'react';
import './App.css';
import businesses from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchBar from '../components/SearchBar/SearchBar';

function App() {

  const [businessesSearch, setBusinessesSearch] = useState([])

  const handleSearch = (term, location, sortBy) => {
    //const results = (term, location, sortBy);
    setBusinessesSearch(results)
  }

  return (
    <>
      <h1 className='font-MainTitle text-5xl text-shadow-lg/30 text-center w-full h-full bg-header-bg py-4 pb-6'>welp</h1>
      <div>
        <SearchBar />
        <BusinessList BusinessData={businesses} />
      </div>
    </>
  )
}

export default App;

//className='font-MainTitle text-5xl text-shadow-lg/30 text-center w-full h-full bg-cover py-4 pb-6' style={{ backgroundImage: `url(${headerBg})` }}