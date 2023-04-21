import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Form/Button';
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import { updateUser } from '../../../actions/userActions';
import { useDispatch } from 'react-redux';


function UserEdit({ data }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    lastname: data[0].lastname,
    firstname: data[0].firstname,
    nickname: data[0].nickname,
    email: data[0].email,
    birthdate: data[0].birthdate,
    phone: data[0].phone,
    address: data[0].address,
    address_2: data[0].address_2,
    zip_code: data[0].zip_code,
    city: data[0].city,
    role: data[0].role,
    subscription: data[0].subscription,
    deposit: data[0].deposit,
    url_img: data[0].url_img,
    gender: data[0].gender,
    top_size: data[0].top_size,
    bottom_size: data[0].bottom_size,
  });
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitFormUser = async (e) => {
    e.preventDefault();
    dispatch(updateUser(data[0].id, formData));
    console.log(data)
    //
  };

  return (
    <form
      onSubmit={onSubmitFormUser}
      //  autoComplete="off"
      className="card-body"
    >
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <img src={data[0].url_img} alt={data[0].url_img} />
        </div>
      </div>
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
        <Button> Réinitialiser mot de passe </Button>
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

          <Select
            label="Genre"
            name="gender"
            selected={data[0].gender}
            options={[
              {
                label: 'F',
                value: 'F',
              },
              {
                label: 'M',
                value: 'M',
              },
            ]}
          />

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              htmlFor="top_size"
            >
              Taille Haut
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="top_size"
                name="top_size"
              >
                <option value={data[0].top_size} defaultValue>
                  {data[0].top_size}
                </option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
                <option value="xxxl">XXXL</option>
              </select>
            </label>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
              htmlFor="bottom_size"
            >
              Taille Bas
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="bottom_size"
                name="bottom_size"
              >
                <option value={data[0].bottom_size} defaultValue>
                  {data[0].bottom_size}
                </option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
                <option value="xxxl">XXXL</option>
              </select>
            </label>
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
            htmlFor="add-role"
          >
            Choisir un rôle
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="add-role"
              id="add-role"
              onChange={onChange}
            >
              <option value="Adhérent">Adhérent</option>
              <option value="Bureau">Bureau</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
        </div>
      </div>

      {/* Validate form */}
      <Button>Valider</Button>
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
  ).isRequired,
};

export default UserEdit;
