import React from "react";
import PropTypes from "prop-types";

function Select({ label, name, options, selected, onChange }) {
  return (
    <div className="">
      <label
        className="max-w-screen label flex-col items-start md:flex-row md:items-center"
        htmlFor={name}
      >
        <span className="label-text mb-2 md:mb-0 w-56 font-semibold md:text-base">
          {label}
        </span>
        <select
          className="select-bordered select"
          id={name}
          name={name}
          value={selected}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  selected: "defaultValue",
};

export default Select;
