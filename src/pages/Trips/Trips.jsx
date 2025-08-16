import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Trips.css';

function Trips() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  const trips = [
    { id: 1, title: 'Trip 1', image: 'https://source.unsplash.com/random/400x400/?temple,1' },
    { id: 2, title: 'Trip 2', image: 'https://source.unsplash.com/random/400x400/?temple,2' },
    { id: 3, title: 'Trip 3', image: 'https://source.unsplash.com/random/400x400/?temple,3' },
    { id: 4, title: 'Trip 4', image: 'https://source.unsplash.com/random/400x400/?temple,4' },
    { id: 5, title: 'Trip 5', image: 'https://source.unsplash.com/random/400x400/?temple,5' },
    { id: 6, title: 'Trip 6', image: 'https://source.unsplash.com/random/400x400/?temple,6' },
  ];

  return (
    <div className="trips-container">
      <header className="trips-header">
        <button className="back-button" onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1>Upcoming Trips</h1>
      </header>
      <div className="trips-grid">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <div className="trip-image" style={{ backgroundImage: `url(${trip.image})` }}></div>
            <div className="trip-content">
              <h2>{trip.title}</h2>
              <button className="trip-details-btn" onClick={() => navigate(`/trip/${trip.id}`)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trips;
