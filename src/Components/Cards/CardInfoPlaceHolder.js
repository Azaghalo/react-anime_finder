import React from 'react';
import point from './point.gif';
import './CSS/CardInfoPlaceHolder.css';

export const CardInfoPlaceHolder = () => {
  return (
    <div className="placeholder-container">
      <h1 className="placehodlder-text">No card selected!</h1>
      <img src={point} className="placeholder-bg" />
      <h1 className="placehodlder-text">Select one to get the info!!</h1>
    </div>
  );
};

export default CardInfoPlaceHolder;
