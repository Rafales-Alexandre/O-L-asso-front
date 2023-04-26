
import React from "react";
import PropTypes from "prop-types";


function Checkbox({
  label,
  name,
  onChange,
  value,
}) {
  const id = uuidv4();
  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text font-semibold md:text-base">{label}</span>
        <input
          key={id}
          type="checkbox"
          name={name}
          className="checkbox checkbox-lg"
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
  id: PropTypes.string,


};
Checkbox.defaultProps = {
  id: '',
};

export default Checkbox;
