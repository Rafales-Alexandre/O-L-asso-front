import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../actions/userActions';
import Button from '../../Form/Button';
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import Checkbox from '../../Form/Checkbox';
import logo from '../../../assets/react.svg';

function UserCreate({ data = [], closeModal }) {
  const [password, setPassword] = useState('');

  function generateRandomPassword() {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+<>/?';
    const charsetLength = charset.length;
    const randomArray = new Uint8Array(length);
    window.crypto.getRandomValues(randomArray);

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset[randomArray[i] % charsetLength];
    }

    return result;
  }

  const generatePassword = () => {
    const newPassword = generateRandomPassword();
    setPassword(newPassword);
    setFormData({...formData, password: newPassword });
  };

  useEffect(() => {
    generatePassword();
  }, []);
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

  const onSubmitFormUser = async (e) => {
    if (e) {
      e.preventDefault();
    }
    generatePassword();
    dispatch(createUser(formData));
    closeModal();
  };

  useEffect(() => {
    if (data.length) {
      onSubmitFormUser();
    }
  }, [formData]);

  return (
    <form
      onSubmit={onSubmitFormUser}
      //  autoComplete="off"
      className="card-body"
    >
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <img src={logo} alt={logo} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <Input
          label="Nom"
          name="lastname"
          type="text"
          placeholder="Votre Nom"
          value={formData.lastname}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />

        <Input
          label="Prénom"
          name="firstname"
          type="text"
          placeholder="Votre Prénom"
          value={formData.firstname}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />

        <Input
          label="Pseudo"
          name="nickname"
          type="text"
          placeholder="Votre Pseudo"
          value={formData.nickname}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />
        {/* <input type='url' />

         <button type='submit' >Ajouter une photo</button> */}
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Votre Email"
          value={formData.email}
          onChange={onChange}
        />
        <Button> Réinitialiser mot de passe </Button>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <Input
          label="Date de naissance"
          name="birthdate"
          type="date"
          placeholder="Votre Date de naissance"
          value={formData.birthdate}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />

        <Input
          label="Téléphone"
          name="phone"
          type="tel"
          placeholder="Votre Téléphone"
          value={formData.phone}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />

        <div className="flex flex-wrap -mx-3 mb-6">

          <Select
            label="Genre"
            name="gender"
            onChange={onChange}
            options={[
              {
                label: 'F',
                value: 'F',
              },
              {
                label: 'M',
                value: 'M',
              },

              {
                label: 'mixte',
                value: 'mixte',
              },
            ]}
          />
          <Select
            label="Taille Haut"
            name="top_size"
            onChange={onChange}
            options={[
              {
                label: 'XS',
                value: 'XS',
              },
              {
                label: 'S',
                value: 'S',
              },
              {
                label: 'M',
                value: 'M',
              },
              {
                label: 'L',
                value: 'L',
              },
              {
                label: 'XL',
                value: 'XL',
              },
              {
                label: 'XXL',
                value: 'XXL',
              },
              {
                label: 'XXXL',
                value: 'XXXL',
              },
            ]}
          />
          <Select
            label="Taille Bas"
            name="bottom_size"
            onChange={onChange}
            options={[
              {
                label: 'XS',
                value: 'XS',
              },
              {
                label: 'S',
                value: 'S',
              },
              {
                label: 'M',
                value: 'M',
              },
              {
                label: 'L',
                value: 'L',
              },
              {
                label: 'XL',
                value: 'XL',
              },
              {
                label: 'XXL',
                value: 'XXL',
              },
              {
                label: 'XXXL',
                value: 'XXXL',
              },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <Input
          label="Adresse"
          name="address"
          type="text"
          placeholder="Votre adresse"
          value={formData.address}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
        <Input
          label="Adresse Complémentaire"
          name="address_2"
          type="text"
          placeholder="Adresse Complémentaire"
          value={formData.address_2}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <Input
          label="Code postal"
          name="zip_code"
          type="number"
          placeholder="Code postal"
          value={formData.zip_code}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
        <Input
          label="Ville"
          name="city"
          type="text"
          placeholder="Ville"
          value={formData.city}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
      </div>
      {/* PART Members and Admin */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          label="Rôle"
          name="role"
          type="text"
          placeholder="Rôle"
          value={formData.role}
          onChange={handleCheckboxChange}
          inputSizeClass="md:w-1/3"
          disabled={Ismember}
        />
        <fieldset disabled={Ismember}>
          <legend>Adhésion</legend>
          <div className="flex flex-wrap">
            <Checkbox
              label="Cotisation payée"
              name="subscription"
              type="checkbox"
              checked={isChecked.subscription === 'true'}
              value={formData.subscription}
              onClick={handleCheckboxChange}
            />

            <Checkbox
              label="Caution versée"
              name="deposit"
              type="checkbox"
              checked={isChecked.deposit === 'true'}
              value={formData.deposit}
              onClick={handleCheckboxChange}
            />
          </div>
        </fieldset>
        {(role === 'admin') && (
          <Select
            label="Choisir un rôle"
            name="role"
            selected="Adhérent"
            onChange={onChange}
            options={[
              {
                label: 'Adhérent',
                value: 'member',
              },
              {
                label: 'Bureau',
                value: 'board',
              },
              {
                label: 'Admin',
                value: 'admin',
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
      lastname: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      address_2: PropTypes.string.isRequired,
      zip_code: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      subscription: PropTypes.bool.isRequired,
      deposit: PropTypes.bool.isRequired,
      url_img: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      top_size: PropTypes.string.isRequired,
      bottom_size: PropTypes.string.isRequired,
    }),
    ),
};

export default UserCreate;