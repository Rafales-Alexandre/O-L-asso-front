import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import UserView from './UserView';
import Suits from './Suits';
import Users from './Users';
import Instruments from './Instruments';
import UserForm from '../Create/UserForm';
import ErrorClient from '../../pages/ErrorCLient';

  function DataView() {
  const user = useSelector((state) => state.user.loggedInUser.user);
  return (
    <Routes>
      <Route path="/" element={<UserView user={user} />} />
      <Route path="/profil" element={<UserForm mode="edit" data={[user]} closeModal={() => {}} />} />
      <Route path="/instruments" element={<Instruments />} />
      <Route path="/suits" element={<Suits />} />
      <Route path="/users" element={<Users />} />
      <Route path="/ErrorClient" element={<ErrorClient />} />
      <Route path='*' element={<ErrorClient />} />
    </Routes>
  );
}

DataView.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url_img: PropTypes.string,
    lastname: PropTypes.string,
    firstname: PropTypes.string,
    nickname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    birthdate: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    address_2: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    gender: PropTypes.string,
    top_size: PropTypes.string,
    bottom_size: PropTypes.string,
    subscription: PropTypes.bool,
    deposit: PropTypes.bool,
    role: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,

  }).isRequired,
};
DataView.defaultProptypes = {
  password: null
}

export default DataView;
