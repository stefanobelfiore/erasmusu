import React from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/Home';

function App() {

  const dataNews = useSelector((state) => state);
 

  return (
    
      <Home/>

  )}

export default App;
