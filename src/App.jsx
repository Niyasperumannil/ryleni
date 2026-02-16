import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero/Hero';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default App;
