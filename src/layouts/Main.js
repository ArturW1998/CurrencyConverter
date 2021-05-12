import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../components/navBar';

const Main = ({ children }) => (
  <div className="App">
    <NavBar />
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
