import React from "react";
import PropTypes from "prop-types";

function Checkbox({ label, name, onChange, value }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text font-semibold md:text-base">{label}</span>
        <input
          id={name}
          type="checkbox"
          name={name}
          className="checkbox checkbox-lg"
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
