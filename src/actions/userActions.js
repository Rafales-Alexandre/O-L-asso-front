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
}`;

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: Get_User });
    dispatch({ type: 'FETCH_USERS', payload: data });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }
};

export const Create_User = gql`
mutation Mutation($input: UserInput) {
  addUser(input: $input) {
    lastname
  }
}
`;
export const createUser = (input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: Create_User,
      variables: {
        input,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la creation de l'utilisateur", error);
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
        "updateUserId": updateUserId,
        "input": 
          input
        
      },
    });
    dispatch({
      type: 'Update_User',
      payload: response.data.updateUser,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  }
};

/* TODO plusieurs actions car la c'est un peu too mutch */
/* futur query d'auth
 query GetUserByCredential($email: String!, $password: String!) {
  getUserByCredential(email: $email, password: $password) {
  }
} */