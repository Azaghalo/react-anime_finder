import React, { useReducer } from 'react';
import axios from 'axios';
import apiContext from './apiContext';
import apiReducer from './apiReducer';
import {
  SEARCH_ANIME,
  SEARCH_MANGA,
  SET_LOADING,
  GET_ANIME,
  GET_MANGA,
} from '../types';

const ApiState = (props) => {
  const initialState = {
    animes: [],
    anime: {},
    mangas: [],
    manga: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);

  //Search Anime

  //Get Anime

  //Search Manga

  //Get Manga

  //SetLoading

  return (
    <apiContext.Provider
      value={{
        animes: state.animes,
        anime: state.anime,
        mangas: state.mangas,
        manga: state.manga,
        loading: state.loading,
      }}
    >
      {props.children}
    </apiContext.Provider>
  );
};

export default ApiState;
