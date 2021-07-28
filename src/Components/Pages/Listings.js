import React, { useState } from 'react';
import Card from '../Cards/Card';
import CardInfo from '../Cards/CardInfo';
import Spinner from '../Layout/Spinner';
import CardInfoPlaceHolder from '../Cards/CardInfoPlaceHolder';
import './CSS/Listings.css';

const Listings = ({ animes, loading }) => {
  const [selectedCard, setSelectedCard] = useState({ selected: '' });
  const [selectedAnime, setSelectedAnime] = useState(null);

  if (loading) {
    return (
      <section className="container">
        <Spinner />;
      </section>
    );
  }

  const handleChildClick = (index, anime) => {
    if (selectedCard.selected === index) {
      setSelectedCard({ selected: '' });
      setSelectedAnime(null);
    } else {
      setSelectedCard({ selected: index });
      setSelectedAnime(anime);
    }
  };

  return (
    <section className="container">
      <div className="listing-wrapper">
        <div className="card-info">
          {selectedAnime !== null ? (
            <CardInfo anime={selectedAnime} />
          ) : (
            <CardInfoPlaceHolder />
          )}
        </div>
        <div className="cards-wrapper">
          {animes.map((anime) => (
            <Card
              key={anime.id}
              anime={anime}
              selected={selectedCard.selected}
              onClick={handleChildClick}
              index={anime.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
