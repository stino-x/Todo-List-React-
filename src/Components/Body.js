import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useUserContext } from './Logic/UserContextProvider';

export default function Body({ children }) {
  const { ClearAll, removeAllCompleted } = useUserContext();
  const clearAll = () => {
    ClearAll();
    removeAllCompleted();
  };
  return (
    <div className="body">
      <div className="section">
        <span className="td">
          <span>Todays to Do</span>
          <box-icon className="refresh" name="refresh" id="refresh" />
        </span>
      </div>
      {children}
      <button type="button" onClick={() => clearAll()} className=".clear-all" value="Clear all completed">
        Clear all completed
      </button>
    </div>

  );
}
Body.propTypes = {
  children: PropTypes.node.isRequired,
};
