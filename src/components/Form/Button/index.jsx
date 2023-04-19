import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <div className="form-control mt-6">
      <button
        type="submit"
        className="btn btn-primary"
        onClick={onClick}
      >
        { children }
      </button>
    </div>
  );
}

/* Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}; */

export default Button;
