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
        >
          {options.map((option) => (
            <option
              value={option.value}
              selected={option.value === selected}
              onChange={onChange}
            >
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
  options: PropTypes.arrayOf({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  selected: PropTypes.string.isRequired,
};

export default Select;
