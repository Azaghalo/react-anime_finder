import React, { useState } from 'react';
import './CSS/Navbar.css';

const Navbar = ({ searchAnime }) => {
  const [searchBarOn, setSearchbarOn] = useState(false);
  const [text, setText] = useState('');

  const onClick = () => {
    setSearchbarOn(!searchBarOn);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      searchAnime(text);
    }
    setText('');
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <h3 className="logo">AnimeFinder</h3>
        <div className={searchBarOn === true ? 'search active' : 'search'}>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Search..."
              value={text}
              onChange={onChange}
            />
            <button type="submit" className="btn" onClick={onClick}>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
