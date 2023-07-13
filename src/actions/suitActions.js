import { gql } from '@apollo/client/core';
import client from '../apolloClient';

export const FETCH_SUITS = 'FETCH_SUITS';
export const ADD_SUIT = 'ADD_SUIT';
export const UPDATE_SUIT = 'UPDATE_SUIT';
export const DELETE_SUIT = 'DELETE_SUIT';

const getSuitsReq = gql`
query Query {
  getAllSuits {
    id
    url_img
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
export const updateSuitReq = gql`
mutation Mutation($updateSuitId: ID!, $input: SuitInput) {
  updateSuit(id: $updateSuitId, input: $input) {
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
    total
  }
}
`;
export const createSuitReq = gql`
mutation Mutation($input: SuitInput) {
  addSuit(input: $input) {
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
    total
  }
}`;
export const deleteSuitReq = gql`
mutation DeleteSuit($deleteSuitId: ID!) {
  deleteSuit(id: $deleteSuitId)
}
`;

export const fetchSuits = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: getSuitsReq });
    dispatch({ type: 'FETCH_SUITS', payload: data.getAllSuits });
  } catch (error) {
    /* console.error('Erreur lors de la récupération des costumes :', error); */
  }
};


export const updateSuit = (updateSuitId, input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: updateSuitReq,
      variables: {
        updateSuitId,
        input,
      },
    });
    dispatch({
      type: 'UPDATE_SUIT',
      payload: response.data.updateSuit,
    });
  } catch (error) {
    /* console.error('Erreur lors de la modification du costume :', error); */
  }
};


export const createSuit = (input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: createSuitReq,
      variables: {
        input,
      },
    });
    dispatch({
      type: 'ADD_SUIT',
      payload: response.data.addSuit,
    });
  } catch (error) {
    /* console.error('Erreur lors de la création du costume :', error); */
  }
};


export const deleteSuit = (SuitId) => async (dispatch) => {
  try {
    await client.mutate({
      mutation: deleteSuitReq,
      variables: {
        deleteSuitId: SuitId,
      },
    });
    dispatch({
      type: 'DELETE_SUIT',
      payload: SuitId,
    })
  } catch (error) {
    /* console.error('Error deleting user:', error); */
}
};
