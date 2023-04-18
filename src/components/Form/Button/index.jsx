import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, color = 'black', onClick }) {
  return (
    <button
      type="submit"
      className={`block appearance-none block w-full bg-${color}-200 text-white-700 border py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      onClick={onClick}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
