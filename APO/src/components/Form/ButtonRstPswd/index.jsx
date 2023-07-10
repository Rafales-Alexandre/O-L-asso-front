import React from "react";
import PropTypes from 'prop-types';

function ButtonRstPswd({ children, onClick }) {

  const handelResetPassword = () => {
    console.log('reset')
  }
  return (
    <div className="form-control my-6">
      <button
        type="submit"
        className="btn-primary btn hover:btn-warning w-full max-w-xs self-center"
        onClick={handelResetPassword}
      >
        {children}
      </button>
    </div>
  );
}

ButtonRstPswd.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
ButtonRstPswd.defaultProps = {
  onClick: () => {},
};



export default ButtonRstPswd;
