import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createUser, updateUser } from '../../../actions/userActions';
import Button from '../../Form/Button';
import ButtonRstPswd from "../../Form/ButtonRstPswd";
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import Checkbox from '../../Form/Checkbox';
import FileBase64 from 'react-file-base64';

function UserForm({ mode, selectedUser = {}, closeModal }) {
  const dispatch = useDispatch();
  
  
  const role = selectedUser ? selectedUser.role || 'admin' : 'admin';

  const initialFormData = {
    lastname: selectedUser ? selectedUser.lastname : '',
    firstname: selectedUser ? selectedUser.firstname : '',
    nickname: selectedUser ? selectedUser.nickname : '',
    email: selectedUser ? selectedUser.email : '',
    birthdate: selectedUser ? selectedUser.birthdate : '',
    phone: selectedUser ? selectedUser.phone : '',
    address: selectedUser ? selectedUser.address : '',
    address_2: selectedUser ? selectedUser.address_2 : '',
    zip_code: selectedUser ? selectedUser.zip_code : '',
    city: selectedUser ? selectedUser.city : '',
    role,
    url_img: selectedUser ? selectedUser.url_img : '',
    gender: selectedUser ? selectedUser.gender : 'F',
    top_size: selectedUser ? selectedUser.top_size : 'S',
    bottom_size: selectedUser ? selectedUser.bottom_size : 'S',
    subscription: selectedUser ? selectedUser.subscription : false,
    deposit: selectedUser ? selectedUser.deposit : false,

    ...(mode === 'create' ? { password: "chuckpass" }: {}), 
  };

  
  const [formData, setFormData] = useState(initialFormData);
  const [selectedGender, setSelectedGender] = useState(selectedUser.gender || 'F');
  const [selectedTopSize, setSelectedTopSize] = useState(selectedUser.top_size || 'M');
  const [selectedBottomSize, setSelectedBottomSize] = useState(selectedUser.bottom_size || 'M');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    setFormData({ ...formData, gender: event.target.value });
  };
  
  const handleTopSizeChange = (event) => {
    setSelectedTopSize(event.target.value);
    setFormData({ ...formData, top_size: event.target.value });
  };
  
  const handleBottomSizeChange = (event) => {
    setSelectedBottomSize(event.target.value);
    setFormData({ ...formData, bottom_size: event.target.value });
  };



 /*  function generateRandomPassword() {
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
  } */


  const Ismember = selectedUser  && role === 'member';

  const handleCheckboxChange = (event) => {
    const checked = !formData[event.target.name];
    if (mode === 'create') {
      createUser({ ...formData, [event.target.name]: checked.toString() });
    } else {
      updateUser({ ...formData, [event.target.name]: checked.toString() });
    }
  
    setFormData({
      ...formData,
      [event.target.name]:checked,
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSubmitFormUser = async (e) => {
    e.preventDefault();
    const finalFormData = {
      ...formData,
      subscription: Boolean(formData.subscription),
      deposit: Boolean(formData.deposit),
    };
    
    if (mode === 'create') {
      dispatch(createUser(finalFormData));
    } else {
      dispatch(updateUser(selectedUser.id, finalFormData));
    }
    setShowConfirmModal(true);
    setTimeout(()=>{
      setShowConfirmModal(false);
      closeModal()},2000)
      ;
  };

  const handleFileChange = (file) => {
    setFormData({
      ...formData,
      url_img: file.base64,
    });
  };
    
    return (
      <form onSubmit={handleSubmitFormUser} className="m-2 md:m-0 ">
        <h1 className="text-3xl font-semibold my-8 text-white font-outline-2">{mode === 'edit' ? 'Editer le' : 'Ajouter un'} profil</h1>
        <div className="flex items-center space-x-36">
  <label className="label">
    <span className="label-text font-semibold md:text-base text-white font-outline-1">Avatar</span>
  </label>
  <FileBase64 multiple={false} onDone={handleFileChange} />
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
                    required = {true}
            />
            <Input
              label="Prénom"
              name="firstname"
              type="text"
              placeholder="Prénom"
              value={formData.firstname}
              onChange={onChange}
              inputSizeClass=""
              required = {true}
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
            required = {true}
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
            required = {true}
          />

          <Input
            label="Téléphone"
            name="phone"
            type="tel"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={onChange}
            inputSizeClass=""
            required = {true}
          />
        </div>
        <div className="">
          <Select
            label="Genre"
            name="gender"
            selected={selectedGender}
            onChange={handleGenderChange}
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
                label: "Mixte",
                value: "Mixte",
              },
            ]}
          />
          <Select
            label="Taille Haut"
            name="top_size"
            selected={selectedTopSize}
            onChange={handleTopSizeChange}
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
            selected={selectedBottomSize}
            onChange={handleBottomSizeChange}
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
          <div className="">
            <Input
                   label="Adresse"
                   name="address"
                   type="text"
                   placeholder="Adresse"
                   value={formData.address}
                   onChange={onChange}
                   inputSizeClass=""
                   required={true}
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
              required = {true}
            />

            <Input
              label="Ville"
              name="city"
              type="text"
              placeholder="Ville"
              value={formData.city}
              onChange={onChange}
              inputSizeClass=""
              required = {true}
            />
          </div>
  <fieldset disabled={Ismember}>
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
  </fieldset>
  <div className="form-actions">
    <Button
      type="submit"
      color="primary"
    >
    {mode === 'create' ? 'Créer' : 'Mettre à jour'}    
    </Button>
  </div>
  {showConfirmModal && (
        <div className={`modal modal-bottom sm:modal-middle ${showConfirmModal ? 'modal-open' : ''}`}>
          <div className='modal-box  '>
            <h3 className='font-bold text-lg'> {`${mode === 'edit' ? 'Utilisateur modifié' : 'Membre ajouté'}`}</h3>
          </div>
        </div>
      )}
</form>
);
};

UserForm.propTypes = {
mode: PropTypes.oneOf(['create', 'edit']).isRequired,
selectedUser: PropTypes.object,
closeModal: PropTypes.func.isRequired,
};

UserForm.defaultProps = {
  selectedUser: {},
}

export default UserForm;
