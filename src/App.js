import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Trips from './pages/Trips';
import TripDetail from './pages/TripDetail';
import ExploreChitrakoot from './pages/ExploreChitrakoot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreChitrakoot />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trip/:id" element={<TripDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
