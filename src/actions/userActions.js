import { useMutation } from '@apollo/client';
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
    const { data } = await client.query({query: Get_Instrument });
    dispatch({ type: 'FETCH_INSTRUMENTS', payload: data });
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
    const { data } = await client.query({ query: Get_Suits });
    dispatch({ type: 'FETCH_SUITS', payload: data });
  } catch (error) {
    console.error('Erreur lors de la récupération des costumes :', error);
  }
};

export const Update_User = gql`
mutation Mutation($updateUserId: ID!, $input: UserInput) {
  updateUser(id: $updateUserId, input: $input) {
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

export const updateUser = (updateUserId, input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: Update_User,
      variables: {
        "updateUserId": 1,
        "input": {
          "lastname": "Sixtineeeeuu",
          "email": "Nathalie.Cousin40@gmail.com",
          "zip_code": null,
          "url_img": null,
          "subscription": null,
          "top_size": null,
          "role": null,
          "phone": null,
          "password": null,
          "nickname": null,
          "instrument_id": null,
          "gender": null,
          "firstname": null,
          "deposit": null,
          "city": null,
          "bottom_size": null,
          "birthdate": null,
          "address_2": null,
          "address": null
        }
      },
    });
    dispatch({
      type: 'Update_User',
      payload: response.data.updateUser,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  }
}
