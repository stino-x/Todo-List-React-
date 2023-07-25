import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Body({ children }) {
  return (
    <div className="body">
      <div className="section">
        <span className="td">
          <span>Todays to Do</span>
          <box-icon className="refresh" name="refresh" id="refresh" />
        </span>
      </div>
      {children}
      <button type="button" className=".clear-all" value="Clear all completed">
        Clear all completed
      </button>
    </div>

  );
}
Body.propTypes = {
  children: PropTypes.node.isRequired,
};
