import React from 'react';
import banner from './banner.jpg';
import './CSS/CardInfo.css';

export const CardInfo = ({ anime }) => {
  console.log(anime);
  const { canonicalTitle, coverImage, description, youtubeVideoId } =
    anime.attributes;

  const large = coverImage === null ? banner : coverImage.large;

  return (
    <div className="info-container">
      <img className="banner-img" src={large} />
      <h1 className="info-name">{canonicalTitle}</h1>
      <div className="summary">
        <h2 className="summary-title">
          Summary <i className="mark fas fa-book"></i>
        </h2>
        <div className="text-container">
          <p className="summary-text">{description}</p>
        </div>
        <iframe
          className="video"
          src={'https://www.youtube.com/embed/' + youtubeVideoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CardInfo;
