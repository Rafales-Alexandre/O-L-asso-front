import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserView from './UserView';
import Suits from './Suits';
import Users from './Users';
import Instruments from './Instruments';
import UserEdit from '../Edit/UserEdit';

function DataView({ loggedInUser }) {
  return (
    <Routes>
      <Route path="/" element={<UserView user={loggedInUser} />} />
      <Route path="/profil" element={<UserEdit data={[loggedInUser]} closeModal={() => {}} />} />
      <Route path="/instruments" element={<Instruments />} />
      <Route path="/suits" element={<Suits />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

DataView.propTypes = {
  loggedInUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url_img: PropTypes.string,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    address_2: PropTypes.string,
    zip_code: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    top_size: PropTypes.string.isRequired,
    bottom_size: PropTypes.string.isRequired,
    subscription: PropTypes.bool.isRequired,
    deposit: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string,
  }).isRequired,
};

export default DataView;
