import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick, className}) {
  return (
    <div className="form-control my-6">
      <button
        type="submit"
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
Button.defaultProps = {
  onClick: () => {},
  className: "btn-primary btn w-full max-w-xs self-center",
};
export default Button;
