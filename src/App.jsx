import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import Card from './Components/Card/Card';
import Home from './Components/Home/Home';
import './Style/App.css';

function App() {
  
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/card" element={<Card />} /> */}
    </Routes>
  );
}

export default App;