import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../actions/userActions';
import Button from '../../Form/Button';
import ButtonRstPswd from "../../Form/ButtonRstPswd";
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import Checkbox from '../../Form/Checkbox';
import logo from '../../../assets/react.svg';

function UserCreate({ data = [], closeModal }) {
  const dispatch = useDispatch();
  const role = 'admin';

  const initialFormData = {
    lastname: '',
    firstname: '',
    nickname: '',
    email: '',
    birthdate: '',
    phone: '',
    address: '',
    address_2: '',
    zip_code: '',
    city: '',
    role: 'admin',
    url_img: '',
    gender: 'F',
    top_size: 'M',
    bottom_size: 'M',
  };

  const initialIsChecked = {
    subscription: 'false',
    deposit: 'false',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const [selectedValue, setSelectedValue] = useState('F');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  function generateRandomPassword() {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+<>/?';
    const charsetLength = charset.length;
    const randomArray = new Uint8Array(length);
    window.crypto.getRandomValues(randomArray);

    let result = '';
    for (let i = 0; i < length; i += 1) {
      result += charset[randomArray[i] % charsetLength];
    }

    return result;
  }

  const generatePassword = useCallback(() => {
    const newPassword = generateRandomPassword();
    return newPassword;
  }, []);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const Ismember = data.length && role === 'member';

  const handleCheckboxChange = (event) => {
    createUser(formData);
    if (Ismember) {
      event.preventDefault();
      return;
    }

    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked.toString(),
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitFormUser = useCallback(
    async (e, newPassword = null) => {
      e.preventDefault()
      const passwordToUse = newPassword || generatePassword();
      dispatch(createUser({ ...formData, password: passwordToUse }));
      closeModal();
    },
    [generatePassword, formData, dispatch, closeModal],
  );

  useEffect(() => {
    if (data.length) {
      const newPassword = generatePassword();
      onSubmitFormUser(null, newPassword);
    }
  }, [data, onSubmitFormUser, generatePassword]);

  return (
    <form
      onSubmit={onSubmitFormUser}
      className="m-2 md:m-0"
    >
      <div className="avatar">
        <div className="m-4 w-12 items-center rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 md:w-24">
          <img src={logo} alt={logo} />
        </div>
      </div>
      <div className="">
        <Input
          label="Nom"
          name="lastname"
          type="text"
          placeholder='Nom'
          value={formData.lastname}
          onChange={onChange}
          inputSizeClass=""
        />

        <Input
          label="Prénom"
          name="firstname"
          type="text"
          placeholder="Prénom"
          value={formData.firstname}
          onChange={onChange}
          inputSizeClass=""
        />

        <Input
          label="Pseudo"
          name="nickname"
          type="text"
          placeholder="Pseudo"
          value={formData.nickname}
          onChange={onChange}
          inputSizeClass=""
        />
        {/* <input type='url' />

         <button type='submit' >Ajouter une photo</button> */}
      </div>
      <div className="">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
        />
        <ButtonRstPswd>Réinitialiser le mot de passe</ButtonRstPswd>
      </div>
      <div className="">
        <Input
          label="Date de naissance"
          name="birthdate"
          type="date"
          placeholder="Date de naissance"
          value={formData.birthdate}
          onChange={onChange}
          inputSizeClass=""
        />

        <Input
          label="Téléphone"
          name="phone"
          type="tel"
          placeholder="Téléphone"
          value={formData.phone}
          onChange={onChange}
          inputSizeClass=""
        />

        <div className="">
          <Select
            label="Genre"
            name="gender"
            selected={selectedValue}
            onChange={onChange}
            options={[
              {
                label: "F",
                value: "F",
              },
              {
                label: "M",
                value: "M",
              },

              {
                label: "mixte",
                value: "mixte",
              },
            ]}
          />
          <Select
            label="Taille Haut"
            name="top_size"
            value={selectedValue}
            onChange={handleChange}
            options={[
              {
                label: "S",
                value: "S",
              },
              {
                label: "M",
                value: "M",
              },
              {
                label: "L",
                value: "L",
              },
              {
                label: "XL",
                value: "XL",
              },
              {
                label: "XXL",
                value: "XXL",
              },
              {
                label: "XXXL",
                value: "XXXL",
              },
            ]}
          />
          <Select
            label="Taille Bas"
            name="bottom_size"
            value={selectedValue}
            onChange={handleChange}
            options={[
              {
                label: "S",
                value: "S",
              },
              {
                label: "M",
                value: "M",
              },
              {
                label: "L",
                value: "L",
              },
              {
                label: "XL",
                value: "XL",
              },
              {
                label: "XXL",
                value: "XXL",
              },
              {
                label: "XXXL",
                value: "XXXL",
              },
            ]}
          />
        </div>
      </div>
      <div className="">
        <Input
          label="Adresse"
          name="address"
          type="text"
          placeholder="Adresse"
          value={formData.address}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Adresse Complémentaire"
          name="address_2"
          type="text"
          placeholder="Adresse Complémentaire"
          value={formData.address_2}
          onChange={onChange}
          inputSizeClass=""
        />
      </div>
      <div className="">
        <Input
          label="Code postal"
          name="zip_code"
          type="number"
          placeholder="Code postal"
          value={formData.zip_code}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Ville"
          name="city"
          type="text"
          placeholder="Ville"
          value={formData.city}
          onChange={onChange}
          inputSizeClass=""
        />
      </div>
      {/* PART Members and Admin */}
      <div className="">
        <Input
          label="Rôle"
          name="role"
          type="text"
          placeholder="Rôle"
          value={formData.role}
          onChange={handleCheckboxChange}
          inputSizeClass=""
          disabled={Ismember}
        />
        <fieldset disabled={Ismember}>
          <legend>Adhésion</legend>
          <div className="">
            <Checkbox
              label="Cotisation payée"
              name="subscription"
              type="checkbox"
              checked={Boolean(isChecked.subscription)}
              onChange={handleCheckboxChange}
              value={Boolean(isChecked.subscription)}
            />

            <Checkbox
              label="Caution versée"
              name="deposit"
              type="checkbox"
              checked={Boolean(isChecked.deposit)}
              onChange={handleCheckboxChange}
              value={Boolean(isChecked.deposit)}
            />
          </div>
        </fieldset>
        {data[0] && data[0].role === "admin" && (
    <Select
      label="Choisir un rôle"
      name="role"
      selected="Adhérent"
      onChange={onChange}
      options={[      
        {        
          label: "Adhérent",        
          value: "member",      
        },      
        {        
          label: "Bureau",        
          value: "board",      
        },      
        {        
          label: "Admin",        
          value: "admin",      
        },    
      ]}
    />
)}
      </div>

      {/* Validate form */}
      <Button>Valider</Button>
    </form>
  );
}

UserCreate.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  closeModal: PropTypes.func,
};
UserCreate.defaultProps = {
  data: [],
  closeModal: () => {},
};
export default UserCreate;
