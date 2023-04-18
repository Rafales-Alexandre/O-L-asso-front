import React from 'react';
// import Select from 'react-select';
// const optionGender= [
//   { value: 'F', label: 'F' },
//   { value: 'H', label: 'H' },
//   { value: {value}, label: {value} },
// ];
// const optionTopSize= [
//   { value: 'xs', label: 'XS' },
//   { value: 's', label: 'S' },
//   { value: 'm', label: 'M' },
//   { value: 'l', label: 'L' },
//   { value: 'xl', label: 'XL' },
//   { value: 'xxl', label: 'XXL' },
//   { value: 'xxxl', label: 'XXXL' },
//   { value: {value}, label: {value} },
// ];
// const optionBottomSize = [
//   { value: 'xs', label: 'XS' },
//   { value: 's', label: 'S' },
//   { value: 'm', label: 'M' },
//   { value: 'l', label: 'L' },
//   { value: 'xl', label: 'XL' },
//   { value: 'xxl', label: 'XXL' },
//   { value: 'xxxl', label: 'XXXL' },
//   { value: {value}, label: {value} },
// ];
// const optionRole= [
//   { value: 'Adhérent', label: 'Adhérent' },
//   { value: 'Bureau', label: 'Bureau' },
//   { value: 'Admin', label: 'Admin' }
// ];



function SelectInput({onChange, value, name, option, inputSizeClass= '', }) {
  return (
  // <div className={`w-full px-3 ${inputSizeClass}`}>
    <label
      className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
      htmlFor='salut'
     >
        <select
         name='salut '
        option={option} 
        onChange={onChange}
        value={value}
       />
    </label>
            // </div>
  )}

export default SelectInput;