import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreChitrakoot.css';

function ExploreChitrakoot() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  const goToTrips = () => {
    navigate('/trips');
  };

  const highlights = [
    {
      id: 1,
      title: 'Ram Ghat',
      image: 'https://source.unsplash.com/random/800x600/?temple,ghat',
      description: 'Where the great saint Tulsidas met Lord Rama. Today, it\'s a vibrant spiritual hub, alive with evening aarti ceremonies.',
      quote: 'The river sings a spiritual melody, and every lamp tells a story of devotion.'
    },
    {
      id: 2,
      title: 'Kamadgiri Parvat',
      image: 'https://source.unsplash.com/random/800x600/?mountain,temple',
      description: 'This sacred hill where Lord Rama and Sita lived during their exile. Pilgrims perform a 5-kilometer parikrama (circumambulation) to have their wishes fulfilled.',
      quote: 'A single walk around this hill can fulfill a lifetime of desires.'
    },
    {
      id: 3,
      title: 'Hanuman Dhara',
      image: 'https://source.unsplash.com/random/800x600/?waterfall,temple',
      description: 'After burning Lanka, Lord Hanuman\'s body was scorching. Lord Rama created a cool stream with an arrow to soothe him, which now flows over the deity\'s idol.',
      quote: 'A divine stream of water, born from an arrow to calm the fiery heart of a hero.'
    },
    {
      id: 4,
      title: 'Gupt Godavari',
      image: 'https://source.unsplash.com/random/800x600/?cave,water',
      description: 'These two caves are where Lord Rama and Lakshman are said to have held their court. A secret stream, believed to be the river Godavari, flows through them.',
      quote: 'A hidden river that came to honor a king, now flows through the heart of the earth.'
    },
    {
      id: 5,
      title: 'Sati Anusuya Ashram',
      image: 'https://source.unsplash.com/random/800x600/?ashram,temple',
      description: 'When the land was parched, Sati Anusuya\'s penance brought forth the Mandakini River. Lord Rama, Sita, and Lakshman visited her to seek her wisdom.',
      quote: 'From profound penance, a river of life was born.'
    },
    {
      id: 6,
      title: 'Bharat Koop',
      image: 'https://source.unsplash.com/random/800x600/?well,ancient',
      description: 'When Lord Rama refused to return to Ayodhya, his brother Bharat poured holy water from all sacred rivers into this well.',
      quote: 'Every holy river converges here, a testament to a brother\'s love.'
    },
    {
      id: 7,
      title: 'Ganesh Bagh',
      image: 'https://source.unsplash.com/random/800x600/?temple,architecture',
      description: 'A beautiful 19th-century temple built by Vinayak Rao Peshwa, known as "Mini-Khajuraho" for its intricate carvings.',
      quote: 'Where stone whispers tales of art and devotion.'
    },
    {
      id: 8,
      title: 'Sphatik Shila',
      image: 'https://source.unsplash.com/random/800x600/?crystal,rock',
      description: 'A large rock on the riverbank where Goddess Sita would adorn herself. It is also believed to be the site where Jayant, disguised as a crow, pecked her foot.',
      quote: 'A crystal rock that witnessed both the simple grace of a goddess and the cunning of a celestial crow.'
    }
  ];

  return (
    <div className="explore-container">
      <header className="explore-header">
        <button className="back-button" onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1>Explore Chitrakoot</h1>
      </header>

      <div className="explore-hero">
        <div className="hero-content">
          <h2>Divine Land of Ram</h2>
          <p>Discover the spiritual and historical treasures of this sacred city where Lord Ram spent 11 years of his exile.</p>
        </div>
      </div>

      <main className="explore-content">
        <section className="introduction">
          <h3>Welcome to Sacred Chitrakoot</h3>
          <p>Chitrakoot, meaning the 'Hill of many wonders', is a place of great religious significance that finds mention in various sacred texts. This holy city is blessed with natural beauty, mythological heritage, and spiritual significance.</p>
        </section>

        <section className="highlights-grid">
          {highlights.map((spot) => (
            <div key={spot.id} className="highlight-card">
              <div className="highlight-image" style={{ backgroundImage: `url(${spot.image})` }}>
                <h3>{spot.title}</h3>
              </div>
              <div className="highlight-info">
                <p>{spot.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h3>Ready to Visit Chitrakoot?</h3>
            <p>Browse our curated selection of spiritual journeys and temple tours.</p>
            <button className="view-trips-btn" onClick={goToTrips}>
              <i className="fas fa-plane-departure"></i>
              View Available Trips
            </button>
          </div>
        </section>
      </main>

      <footer className="explore-footer">
        <p>Experience the divine presence in every corner of Chitrakoot</p>
      </footer>
    </div>
  );
}

export default ExploreChitrakoot;
