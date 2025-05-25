import headerBg from '../assets/headerBg.png';
import React from 'react';
import './App.css';
import businesses from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchBar from '../components/SearchBar/SearchBar';

function App() {

  return (
    <>
      <h1 className='font-MainTitle text-5xl text-shadow-lg/30 text-center w-full h-full bg-cover py-4 pb-6' style={{ backgroundImage: `url(${headerBg})` }}>welp</h1>
      <div className='px-30'>
        <SearchBar />
        <BusinessList BusinessData={businesses} />
      </div>
    </>
  )
}

export default App;