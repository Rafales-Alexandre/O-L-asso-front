import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Form/Button';
import Input from '../../Form/Input';
import SelectInput from '../../Form/SelectInput';

function UserEdit({ data }) {
  console.log(data);
  const [formData, setFormData] = useState({
    lastname: data[0].lastname,
    firstname: data[0].firstname,
    nickname: data[0].nickname,
    email: data[0].email,
    birthdate: data[0].email,
    phone: data[0].phone,
    address: data[0].adress,
    address_2: data[0].address_2,
    zip_code: data[0].zip_code,
    city: data[0].city,
    role: data[0].role,
    subscription: data[0].subscription,
    deposit: data[0].deposit,
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitFormUser = (e) => {
    e.preventDefault();

    //
  };

  return (
    <form
      onSubmit={onSubmitFormUser}
      //  autoComplete="off"
      className="w-full max-w-lg"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          label="Nom"
          name="lastname"
          type="text"
          placeholder={data[0].lastname}
          value={formData.lastname}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />

        <Input
          label="Prénom"
          name="firstname"
          type="text"
          placeholder={data[0].firstname}
          value={formData.firstname}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />

        <Input
          label="Pseudo"
          name="nickname"
          type="text"
          placeholder={data[0].nickname}
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
          placeholder={data[0].email}
          value={formData.email}
          onChange={onChange}
        />

        <div className="w-full px-3">
          <Button >Réinitialiser mot de passe</Button>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <Input
          label="Date de naissance"
          name="birthdate"
          type="date"
          placeholder={data[0].birthdate}
          value={formData.birthdate}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />

        <Input
          label="Téléphone"
          name="phone"
          type="tel"
          placeholder={data[0].phone}
          value={formData.phone}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />

        <div className="flex flex-wrap -mx-3 mb-6">

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              forhtml="grid-gender"
            >
              Genre
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-gender"
              name="gender"
            >
              <option value={data.gender} defaultValue>
                {data.gender}{" "}
              </option>
              <option value="femme">F</option>
              <option value="homme">M</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              forhtml="grid-top_size"
            >
              Taille Haut
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-top_size"
              name="top_size"
            >
              <option value={data.top_size} defaultValue>
                {data.top_size}
              </option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
              <option value="xxxl">XXXL</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              forhtml="grid-bottom_size"
            >
              Taille Bas
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-bottom_size"
              name="bottom_size"
            >
              <option value={data.bottom_size} defaultValue>
                {data.bottom_size}
              </option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
              <option value="xxxl">XXXL</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <Input
          label="Adresse"
          name="address"
          type="text"
          placeholder={data[0].address}
          value={formData.address}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
        <Input
          label="Adresse Complémentaire"
          name="address_2"
          type="text"
          placeholder={data[0].address_2}
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
          placeholder={data[0].zip_code}
          value={formData.zip_code}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
        <Input
          label="Ville"
          name="city"
          type="text"
          placeholder={data[0].city}
          value={formData.city}
          onChange={onChange}
          inputSizeClass="md:w-1/2"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input
          label="Rôle"
          name="role"
          type="text"
          placeholder={data[0].role}
          value={formData.role}
          onChange={onChange}
          inputSizeClass="md:w-1/3"
        />
        {/* PART Members and Admin */}
        <fieldset>
          <legend>Adhésion</legend>
          <div className="flex flex-wrap -mx-3 mb-6">
            <Input
              label="Cotisation payée"
              name="subscription"
              type="checkbox"
              placeholder={data[0].subscription}
              value={formData.subscription}
              onChange={onChange}
              inputSizeClass="md:w-1/3"
            />

            <Input
              label="Caution versée"
              name="deposit"
              type="checkbox"
              placeholder={data[0].deposit}
              value={formData.deposit}
              onChange={onChange}
              inputSizeClass="md:w-1/3"
            />
          </div>
        </fieldset>
        {/* Part Admin */}
        <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-black-700 text-xs font-bold mb-2"
            forhtml="grid-add-role"
          >
            Choisir un rôle
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="role"
            id="grid-add-role"
            onChange={onChange}
          >
            <option value="Adhérent">Adhérent</option>
            <option value="Bureau">Bureau</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Validate form */}

      <div className="w-full px-3">
        <Button>Valider</Button>
      </div>
      {/* <p>* Champs obligatoire</p> 
     => on peut mettre un message d'avertissement lorsqu'un champ est manquant} */}
    </form>
  );
}

UserEdit.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      lastname: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSubmitFormUser: PropTypes.func.isRequired,
};

export default UserEdit;
