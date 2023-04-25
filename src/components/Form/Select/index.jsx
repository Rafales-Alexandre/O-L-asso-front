import React from "react";
import PropTypes from "prop-types";

function Select({
  label,
  name,
  options,
  selected,
  onChange,
}) {
  return (
    <div className="">
      <label className="label" htmlFor={name}>
        <span className="label-text pr-4 font-semibold md:text-base">
          {label}
        </span>
        <select
          className="select-bordered select w-full max-w-xs"
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
    }),
  ).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  selected: 'defaultValue',

};

export default Select;
