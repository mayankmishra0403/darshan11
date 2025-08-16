import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Darshan 360</div>
        <nav className="nav-links">
          <div className="profile-section">Profile</div>
          <div className="upcoming-trips">Upcoming Trips</div>
        </nav>
      </header>
      <main className="main-content">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Welcome to Chitrakoot</h1>
            <p>Discover the beauty of this sacred place</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
