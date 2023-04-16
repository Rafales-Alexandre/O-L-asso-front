import { gql } from '@apollo/client/core';
import client from '../apolloClient';

const Get_User = gql`
query Query {
  getAllUser {
    id
    url_img
    lastname
    firstname
    nickname
    email
    password
    role
  }
}
`;

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data, error, loading } = await client.query({ query: Get_User });
    if (loading) {
      console.log('Loading...');
    }
    if (error) {
      console.error('Error:', error);
      return;
    }
    dispatch({ type: 'FETCH_USERS', payload: data.getAllUser });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }
};

