import React from 'react';
import PropTypes from 'prop-types';

function Select({
  label,
  name,
  options,
  selected,
  onChange,
}) {
  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={name}
          name={name}
        >
          {
            options.map((option) => (
              <option
                value={option.value}
                selected={option.value === selected}
                onChange={onChange}
              >
                {option.label}
              </option>
            ))
          }
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
    onChange: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.string.isRequired,
};

export default Select;
