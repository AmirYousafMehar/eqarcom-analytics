import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import { Home } from './customer/home/Home';
import { About } from './tailor/about/About';
const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;