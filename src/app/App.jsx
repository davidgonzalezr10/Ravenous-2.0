import React from 'react';
import './App.css';
import businesses from './businessData';
import BusinessList from '../components/BusinessList/BusinessList';

function App() {

  return (
    <>
      <h1>ravenous</h1>
      <BusinessList BusinessData={businesses} />
    </>
  )
}

export default App;