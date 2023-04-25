/* eslint-disable max-len */
import { gql } from '@apollo/client/core';
import client from '../apolloClient';

const getUserReq = gql`
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
}`;

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: getUserReq });
    dispatch({ type: 'FETCH_USERS', payload: data });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }
};

export const createUserReq = gql`
mutation Mutation($input: UserInput) {
  addUser(input: $input) {
    lastname
  }
}
`;
export const createUser = (input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: createUserReq,
      variables: {
        input,
      },
    });
    dispatch({
      type: 'createUserReq',
      payload: response.data.createUser,
    });
  } catch (error) {
    /* console.error("Erreur lors de la creation de l'utilisateur", error); */
  }
};

export const updateUserReq = gql`
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
      mutation: updateUserReq,
      variables: {
        updateUserId,
        input,
      },
    });
    dispatch({
      type: 'updateUserReq',
      payload: response.data.updateUser,
    });
  } catch (error) {
    /* console.error("Erreur lors de la création de l'utilisateur :", error); */
  }
};

export const getUserByCredential = gql`
mutation Mutation($input: LoginInput) {
  loginUser(input: $input) {
    token
  }
}
`;

export const auth = (email, password) => async (dispatch) => {
  try {
    const { data } = await client.mutate({
      mutation: getUserByCredential,
      variables: { input: { email, password } },
    });
    const user = data.loginUser;
    if (user) {
      dispatch({ type: 'TOKEN', payload: user });
      localStorage.setItem('token', user.token);
    }
  } catch (error) {
    console.error(error);
  }
};
