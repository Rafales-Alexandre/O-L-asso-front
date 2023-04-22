import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
  label,
  name,
  onChange,
  value,
}) {
  return (
    <div className="flex items-center pl-3">
      <label
        className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
        <input
          id={name}
          type="checkbox"
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
          onChange={onChange}
          value={value}
          checked={value}
        />
      </label>
    </div>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default Checkbox;
