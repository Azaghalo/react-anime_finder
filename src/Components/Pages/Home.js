import React from 'react';
import './CSS/Home.css';

const Home = () => {
  return (
    <section className="container">
      <div className="introduction">
        <h1>Discover your next favorite series!!</h1>
      </div>
      <div className="split anime">
        <h1>Anime</h1>
      </div>
      <div className="split manga">
        <h1>Manga</h1>
      </div>
    </section>
  );
};

export default Home;
