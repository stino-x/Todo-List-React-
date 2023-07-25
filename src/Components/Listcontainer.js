/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

export default function Listcontainer({ children }) {
  return (
    <div className="container" type="submit">
      {children}
    </div>
  );
}

Listcontainer.propTypes = {
  children: PropTypes.node.isRequired,
};
