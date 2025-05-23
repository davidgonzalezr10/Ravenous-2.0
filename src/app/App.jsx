import React from 'react';
import './App.css';
import businesses from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchBar from '../components/SearchBar/SearchBar';

function App() {

  return (
    <>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList BusinessData={businesses} />
    </>
  )
}

export default App;