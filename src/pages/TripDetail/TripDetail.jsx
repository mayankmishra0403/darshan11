import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TripDetail.css';

function TripDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tripDetails = {
    1: {
      title: 'Spiritual Journey to Chitrakoot',
      image: 'https://source.unsplash.com/random/1200x600/?chitrakoot,temple,1',
      description: 'Experience the divine atmosphere of Chitrakoot, where Lord Ram spent 11 years of his exile. Visit sacred sites and participate in spiritual activities.',
      duration: '3 Days',
      price: '₹15,000',
      highlights: [
        'Visit to Ram Raja Temple',
        'Kamadgiri Parikrama',
        'Sphatik Shila darshan',
        'Evening Aarti ceremony',
        'Meditation sessions'
      ]
    },
    2: {
      title: 'Heritage Tour of Temples',
      image: 'https://source.unsplash.com/random/1200x600/?temple,architecture,2',
      description: 'Discover the rich architectural heritage and spiritual significance of ancient temples in the region.',
      duration: '4 Days',
      price: '₹18,000',
      highlights: [
        'Guided temple tours',
        'Historical commentary',
        'Traditional cuisine',
        'Cultural performances',
        'Local art workshops'
      ]
    },
    3: {
      title: 'Spiritual Retreat Package',
      image: 'https://source.unsplash.com/random/1200x600/?meditation,temple,3',
      description: 'Immerse yourself in a peaceful spiritual retreat with meditation, yoga, and religious discourses.',
      duration: '5 Days',
      price: '₹25,000',
      highlights: [
        'Daily yoga sessions',
        'Meditation workshops',
        'Spiritual lectures',
        'Sacred music concerts',
        'Nature walks'
      ]
    },
    4: {
      title: 'Festival Special Tour',
      image: 'https://source.unsplash.com/random/1200x600/?festival,india,4',
      description: 'Experience the vibrant festivals and celebrations in Chitrakoot with local communities.',
      duration: '3 Days',
      price: '₹20,000',
      highlights: [
        'Festival celebrations',
        'Traditional rituals',
        'Cultural programs',
        'Local cuisine',
        'Folk music performances'
      ]
    },
    5: {
      title: 'Nature and Spirituality',
      image: 'https://source.unsplash.com/random/1200x600/?nature,temple,5',
      description: 'Combine spiritual experiences with nature walks and outdoor activities in sacred surroundings.',
      duration: '4 Days',
      price: '₹22,000',
      highlights: [
        'Nature trails',
        'River-side meditation',
        'Bird watching',
        'Sunset prayers',
        'Botanical gardens'
      ]
    },
    6: {
      title: 'Cultural Immersion Tour',
      image: 'https://source.unsplash.com/random/1200x600/?culture,india,6',
      description: 'Deep dive into the local culture, traditions, and spiritual practices of Chitrakoot.',
      duration: '5 Days',
      price: '₹28,000',
      highlights: [
        'Traditional art classes',
        'Local family visits',
        'Cooking workshops',
        'Handicraft sessions',
        'Cultural performances'
      ]
    }
  };

  const trip = tripDetails[id];

  const goBack = () => {
    navigate(-1);
  };

  if (!trip) {
    return <div className="error-message">Trip not found</div>;
  }

  return (
    <div className="trip-detail-container">
      <header className="trip-detail-header">
        <button className="back-button" onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1>{trip.title}</h1>
      </header>

      <div className="trip-detail-content">
        <div className="trip-detail-hero" style={{ backgroundImage: `url(${trip.image})` }}>
          <div className="trip-info-overlay">
            <span className="trip-duration"><i className="fas fa-clock"></i> {trip.duration}</span>
            <span className="trip-price"><i className="fas fa-tag"></i> {trip.price}</span>
          </div>
        </div>

        <div className="trip-detail-info">
          <div className="trip-description">
            <h2>About this Trip</h2>
            <p>{trip.description}</p>
          </div>

          <div className="trip-highlights">
            <h2>Highlights</h2>
            <ul>
              {trip.highlights.map((highlight, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <button className="book-now-btn">
            <i className="fas fa-calendar-check"></i>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
