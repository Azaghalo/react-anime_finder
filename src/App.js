import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Listings from './Components/Pages/Listings';
import axios from 'axios';

import ApiState from './context/APIContext/ApiState';

import './App.css';

class App extends Component {
  state = {
    animes: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://kitsu.io/api/edge/trending/anime');
    const newres = await axios.get('https://kitsu.io/api/edge/anime/12/genres');

    console.log(res.data.data);
    console.log(newres.data.data);

    this.setState({ animes: res.data.data, loading: false });
  }

  searchAnime = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[text]=${text}`
    );

    this.setState({ animes: res.data.data, loading: false });
  };

  render() {
    return (
      <ApiState>
        <div className="App">
          <Navbar searchAnime={this.searchAnime} />
          <Listings loading={this.state.loading} animes={this.state.animes} />
        </div>
      </ApiState>
    );
  }
}

export default App;
