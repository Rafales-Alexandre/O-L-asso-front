import { gql } from '@apollo/client/core';
import client from '../apolloClient';

const Get_User = gql`
query Query {
  getAllUsers {
    id
    url_img
    lastname
    firstname
    nickname
    email
    password
    birthdate
    phone
    address
    address_2
    zip_code
    city
    gender
    top_size
    bottom_size
    subscription
    deposit
    role
    created_at
    updated_at
  }
}
`;
export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: Get_User });
    dispatch({ type: 'FETCH_USERS', payload: data });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }
};

const Get_Instrument = gql`
query Query {
  getAllInstruments {
    id
    code
    pupitre
    observation
    depth
    rods
    weight
    sticker
    created_at
    updated_at
  }
}
`;
export const fetchInstruments = () => async (dispatch) => {
  try {
    const {data} = await client.query({query: Get_Instrument});
    dispatch({ type: 'FETCH_INSTRUMENTS', payload: data});
  } catch (error) {
    console.error('Erreur lors de la récupération des instruments :', error);
  }
};

const Get_Suits = gql`
query Query {
  getAllSuits {
    id
    label
    gender
    observation
    quantity_s
    quantity_m
    quantity_l
    quantity_xl
    quantity_xxl
    quantity_xxxl
  }
}
`;
export const fetchSuits = () => async (dispatch) => {
  try {
    const {data} = await client.query({query: Get_Suits});
    dispatch({ type: 'FETCH_SUITS', payload: data});
  } catch (error) {
    console.error('Erreur lors de la récupération des costumes :', error);
  }
};