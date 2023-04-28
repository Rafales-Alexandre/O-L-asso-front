import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createUser, updateUser } from '../../../actions/userActions';
import Button from '../../Form/Button';
import ButtonRstPswd from "../../Form/ButtonRstPswd";
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import Checkbox from '../../Form/Checkbox';
import logo from '../../../assets/react.svg';

function UserForm({ mode = 'create', data = {}, closeModal }) {
  const dispatch = useDispatch();
  const [files, setFiles] = useState(null);
  const role = data.role || 'admin';

  const initialFormData = {
    lastname: data[0]?.lastname || '',
    firstname: data[0]?.firstname || '',
    nickname: data[0]?.nickname || '',
    email: data[0]?.email || '',
    birthdate: data[0]?.birthdate || '',
    phone: data[0]?.phone || '',
    address: data[0]?.address || '',
    address_2: data[0]?.address_2 || '',
    zip_code: data[0]?.zip_code || '',
    city: data[0]?.city || '',
    role,
    url_img: data[0]?.url_img || '',
    gender: data[0]?.gender || 'F',
    top_size: data[0]?.top_size || 'M',
    bottom_size: data[0]?.bottom_size || 'M',
    subscription: data[0]?.subscription || false,
    deposit: data[0]?.deposit || false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [selectedValue, setSelectedValue] = useState(data.gender || 'F');

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
    if (mode === 'edit') {
      generatePassword();
    }
  }, [generatePassword, mode]);

  const Ismember = data[0] && role === 'member';

  const handleCheckboxChange = (event) => {
    if (mode === 'create') {
      createUser(formData);
    } else {
      updateUser(formData);
    }
    if (Ismember) {
      event.preventDefault();
      return;
    }

    setFormData({
      ...formData,
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
        if (e) {
            e.preventDefault();
        }
      const passwordToUse = mode === 'create' ? (newPassword || generatePassword()) : undefined;
      const formWithPassword = passwordToUse ? { ...formData, password: passwordToUse } : formData;
      if (mode === 'create') {
        dispatch(createUser(formWithPassword));
      } else {
        dispatch(updateUser(data[0].id, {...formData, subscription: Boolean(formData.subscription), deposit: Boolean(formData.deposit)}));

      }
      closeModal();
    },
    [generatePassword, formData, dispatch, closeModal, mode],
  );

  useEffect(() => {
    if (data && mode === 'edit') {
      const newPassword = generatePassword();
      onSubmitFormUser(newPassword);
    }
    }, [data, onSubmitFormUser, generatePassword, mode]);
    
    return (
    <form
       onSubmit={onSubmitFormUser}
       className="m-2 md:m-0"
     >
    {/* <div className="avatar">
        <div className="m-4 w-12 items-center rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 md:w-24">
        <img src={logo} alt={logo} />
        <img src={files ? URL.createObjectURL(files) : data[0].url_img}
        </div>
    </div> */}
    <h1 className="text-3xl font-semibold my-8">Modifiez votre profil</h1>

<div className="flex">
<label className="label">
  <span className="label-text font-semibold md:text-base">Avatar</span>
  <input type="file" className="file-input w-full max-w-xs" />
</label>
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
    {mode === 'edit' && <ButtonRstPswd>Réinitialiser le mot de passe</ButtonRstPswd>}
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
      label="Adresse 2"
      name="address_2"
      type="text"
      placeholder="Adresse 2"
      value={formData.address_2}
      onChange={onChange}
      inputSizeClass=""
    />

    <Input
      label="Code postal"
      name="zip_code"
      type="text"
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
  <div className="checkbox-section">
    <Checkbox
      label="Adhésion"
      name="subscription"
      checked={Boolean(formData.subscription)}
      value={Boolean(formData.subscription)}
      onChange={handleCheckboxChange}
    />

    <Checkbox
      label="Caution"
      name="deposit"
      checked={Boolean(formData.deposit)}
      value={Boolean(formData.deposit)}
      onChange={handleCheckboxChange}
    />
  </div>
  <div className="form-actions">
    <Button
      type="submit"
      color="primary"
    >
    {mode === 'create' ? 'Créer' : 'Mettre à jour'}    
    </Button>
  </div>
</form>
);
};

UserForm.propTypes = {
mode: PropTypes.oneOf(['create', 'edit']),
data: PropTypes.array,
closeModal: PropTypes.func.isRequired,
};

export default UserForm;
