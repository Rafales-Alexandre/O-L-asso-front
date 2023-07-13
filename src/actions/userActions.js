/* eslint-disable max-len */
import { gql } from '@apollo/client/core';
import client from '../apolloClient';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUIT = 'FETCH_USERS_SUIT';
export const FETCH_USERS_INSTRUMENT = 'FETCH_USERS_INSTRUMENT';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const RESET_PASSWORD = 'RESET_PASSWORD';

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
export const getUserSuit =gql`
query Query($getSuitsByUserId: ID!) {
  getSuitsByUser(id: $getSuitsByUserId) {
    label
  }
}`;
export const getUserInstrument = gql `
query Query($getInstrumentsByUserId: ID!) {
  getInstrumentsByUser(id: $getInstrumentsByUserId) {
    id
    url_img
    code
    pupitre
    observation
    depth
    rods
    weight
    sticker
  }
}`;
export const createUserReq = gql`
mutation Mutation($input: UserInput) {
  addUser(input: $input) {
    lastname
  }
}
`;
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
export const deleteUserReq = gql`
mutation Mutation($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId)
}
`;
export const getUserByCredential = gql`
mutation Mutation($input: LoginInput) {
  loginUser(input: $input) {
    token

    user {
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
}
`;
export const resetPasswordReq = gql`
mutation Mutation($token: String!, $newPassword: String!) {
  resetPassword(token: $token, newPassword: $newPassword) {
    success
  }
}
`;
export const resetPassword = async(token, newPassword) => {
  try {
    const { data } = await client.mutate({
      mutation: resetPasswordReq,
      variables:{
        token,
        newPassword,
      },
      });

  } catch (error) {
    console.error('Erreur lors de la reinitialisation du mot de passe')
  }
};
export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: getUserReq });
    dispatch({ type: 'FETCH_USERS', payload: data.getAllUsers });
  } catch (error) {
    /* console.error('Erreur lors de la récupération des utilisateurs :', error); */
  }
};

export const fetchUserSuit = (userId) => async (dispatch) => {
  try{
    const response = await client.query({
      query: getUserSuit,
      variables: {
        getSuitsByUserId: userId,
      }
    });
    dispatch({ type: 'FETCH_USERS_SUIT', payload : response.data.getSuitsByUser })
  } catch (error) {
    /* console.error('Erreur lors de la recuperation du costume') */
  }
};
export const fetchUserInstrument = (userId) => async (dispatch) => {
  try{
    const response = await client.query({
      query: getUserInstrument,
      variables: {
        getInstrumentsByUserId: userId,
      }
    });
    dispatch({ type: 'FETCH_USERS_INSTRUMENT', payload : response.data.getInstrumentsByUser })
  } catch (error) {
    console.error('Erreur lors de la recuperation des instruments')
  }
};
export const createUser = (input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: createUserReq,
      variables: {
        input,
      },
    });
    dispatch({
      type: 'CREATE_USER',
      payload: response.data.createUser,
    });
  } catch (error) {
    console.error("Erreur lors de la creation de l'utilisateur", error);
  }
};


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
      type: 'UPDATE_USER',
      payload: response.data.updateUser,
    });
  } catch (error) {
    console.error("Erreur lors de la modification de l'utilisateur :", error);
  }
};


export const deleteUser = (deleteUserId) => async (dispatch) => {
  try {
    await client.mutate({
      mutation: deleteUserReq,
      variables: {
        deleteUserId,
      },
    });
    dispatch({
      type: 'DELETE_USER',
      payload: deleteUserId,
    })
  } catch (error) {
    /* console.error('Error deleting user:', error); */
}
};



export const auth = (email, password) => async (dispatch) => {
  try {
    const { data } = await client.mutate({
      mutation: getUserByCredential,
      variables: { input: { email, password } },
    });
    const user = data.loginUser;
    if (user) {
      dispatch({type: 'LOGIN_USER', payload:user});
      localStorage.setItem('token', user.token);
    }
  } catch (error) {
    console.error(error);

  }
};
