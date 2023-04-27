import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../../Form/Button';
import ButtonRstPswd from "../../Form/ButtonRstPswd";
import { updateUser } from '../../../actions/userActions';
import Select from '../../Form/Select';
import Input from '../../Form/Input';
import Checkbox from '../../Form/Checkbox';

function UserEdit({ data = 0, closeModal }) {
  const dispatch = useDispatch();

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState(data && data.length > 0 && data[0] ? {
    lastname: data[0].lastname,
    firstname: data[0].firstname,
    nickname: data[0].nickname,
    email: data[0].email,
    birthdate: formatDate(data[0].birthdate),
    phone: data[0].phone,
    address: data[0].address,
    address_2: data[0].address_2,
    zip_code: data[0].zip_code,
    city: data[0].city,
    role: data[0].role,
    url_img: data[0].url_img,
    gender: data[0].gender,
    top_size: data[0].top_size,
    bottom_size: data[0].bottom_size,
  } : {});
  if (!formData || Object.keys(formData).length === 0) {
    return null;
  }
  updateUser(data[0].id, formData);
  const [isChecked, setIsChecked] = useState({
    subscription: Boolean(data[0].subscription),
    deposit: Boolean(data[0].deposit),
  });
  const Ismember = data[0].role === "member";

  const handleCheckboxChange = (event) => {
    if (Ismember) {
      event.preventDefault();
      return;
    }

    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked.toString(),
    });
  };

  const [selected, setSelected] = useState(data[0].gender)
    
    const onChangeSelect = (e) => {
      setSelected(e.target.value)
     };
  
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitFormUser = async (e) => {
    dispatch(updateUser(data[0].id, {
      ...formData,
      subscription: isChecked.subscription === 'true',
      deposit: isChecked.deposit === 'true',
    }));
    e.preventDefault();
    closeModal();
  };

  return (
    <form
      onSubmit={onSubmitFormUser}
      className="m-2 md:m-0"
    >
      <div className="avatar">
        <div className="m-4 w-12 items-center rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 md:w-24">
          <img src={data[0].url_img} alt={data[0].url_img} />
        </div>
      </div>
      <div className="">
        <Input
          label="Nom"
          name="lastname"
          type="text"
          placeholder={data[0].lastname}
          value={formData.lastname}
          onChange={onChange}
          inputSizeClass=""
        />

        <Input
          label="Prénom"
          name="firstname"
          type="text"
          placeholder={data[0].firstname}
          value={formData.firstname}
          onChange={onChange}
          inputSizeClass=""
        />

        <Input
          label="Pseudo"
          name="nickname"
          type="text"
          placeholder={data[0].nickname}
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
          placeholder={data[0].email}
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
          placeholder={data[0].birthdate}
          value={formData.birthdate}
          onChange={onChange}
          inputSizeClass=""
        />

        <Input
          label="Téléphone"
          name="phone"
          type="tel"
          placeholder={data[0].phone}
          value={formData.phone}
          onChange={onChange}
          inputSizeClass=""
        />

        <div className="">
          <Select
            label="Genre"
            name="gender"
            selected={selected}
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
            selected={data[0].top_size}
            onChange={onChange}
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
            selected={data[0].bottom_size}
            onChange={onChange}
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
          placeholder={data[0].address}
          value={formData.address}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Adresse Complémentaire"
          name="address_2"
          type="text"
          placeholder={data[0].address_2}
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
          placeholder={data[0].zip_code}
          value={formData.zip_code}
          onChange={onChange}
          inputSizeClass=""
        />
        <Input
          label="Ville"
          name="city"
          type="text"
          placeholder={data[0].city}
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
          placeholder={data[0].role}
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
              checked={isChecked.subscription}
              onChange={handleCheckboxChange}
              value={isChecked.subscription}
            />

            <Checkbox
              label="Caution versée"
              name="deposit"
              type="checkbox"
              checked={isChecked.deposit}
              onChange={handleCheckboxChange}
              value={isChecked.deposit}
            />
          </div>
        </fieldset>
        {data[0].role === "admin" && (
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
    })
  ).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UserEdit;
