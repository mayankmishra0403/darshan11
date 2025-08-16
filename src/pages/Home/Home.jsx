import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const goToExplore = () => {
    navigate('/explore');
  };

  const goToTrips = () => {
    navigate('/trips');
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Darshan 360</div>
        <nav className="nav-links">
          <div className="profile-section">
            <i className="fas fa-user"></i>
            Profile
          </div>
          <div className="upcoming-trips" onClick={goToTrips}>
            <i className="fas fa-plane"></i>
            Upcoming Trips
          </div>
        </nav>
      </header>
      <main className="main-content">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Chitrakoot Falls</h1>
            <p>India's Niagara - Where Sacred Waters Meet Natural Splendor</p>
            <button className="explore-btn" onClick={goToExplore}>
              <span>Discover The Wonder</span>
            </button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Darshan 360. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
