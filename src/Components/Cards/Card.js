import React from 'react';
import './CSS/Cards.css';

const Card = ({ anime, selected, onClick, index }) => {
  const { canonicalTitle, averageRating, posterImage, startDate, updatedAt } =
    anime.attributes;

  const { large } = posterImage;
  const lastUpdate = updatedAt.split('T', 1);
  const rating = Math.round(averageRating);

  const handleClick = () => {
    onClick(index, anime);
  };

  return (
    <div
      className={selected === index ? 'card active' : 'card'}
      onClick={handleClick}
    >
      <div className="img" style={{ backgroundImage: `url(${large})` }} />
      <div className="info-wrapper">
        <div className="name-wrapper">
          <h1 className="card-name">{canonicalTitle}</h1>
          <div
            className={
              rating >= 80
                ? 'rating-wrapper green'
                : rating >= 50
                ? 'rating-wrapper orange'
                : rating > 0
                ? 'rating-wrapper red'
                : 'rating-wrapper black'
            }
          >
            <h1 className="rating">{rating}</h1>
          </div>
        </div>
        <div className="genre-container">
          <div className="genre">Sci-fi</div>
          <div className="genre">Sci-fi</div>
          <div className="genre">Sci-fi</div>
          <div className="genre">Sci-fi</div>
        </div>
        <div className="dates-container">
          <div className="date">
            <small>Start Date:</small>
            <small>{startDate}</small>
          </div>
          <div className="date-divider"></div>
          <div className="date">
            <small>Last Update:</small>
            <small>{lastUpdate}</small>
          </div>
        </div>
      </div>
      <div className="arrow-container">
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Card;
