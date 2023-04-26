import { gql } from '@apollo/client/core';
import client from '../apolloClient';

const getSuitsReq = gql`
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
    const { data } = await client.query({ query: getSuitsReq });
    dispatch({ type: 'FETCH_SUITS', payload: data });
  } catch (error) {
    /* console.error('Erreur lors de la récupération des costumes :', error); */
  }
};

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

export const updateSuit = (updateSuitId, input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: updateSuitReq,
      variables: {
        updateSuitId,
        input: {
          input,
        },
      },
    });
    dispatch({
      type: 'updateSuitReq',
      payload: response.data.updateSuit,
    });
  } catch (error) {
    /* console.error('Erreur lors de la modification du costume :', error); */
  }
};

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

export const createSuit = (input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: createSuitReq,
      variables: {
        input: {
          input,
        },
      },
    });
    dispatch({
      type: 'createSuitReq',
      payload: response.data.createSuit,
    });
  } catch (error) {
    /* console.error('Erreur lors de la création du costume :', error); */
  }
};

export const deleteSuitReq = gql`
mutation DeleteSuit($deleteSuitId: ID!) {
  deleteSuit(id: $deleteSuitId)
}
`;
export const deleteSuit = async (deleteSuitId) => {
  try {
    await client.mutate({
      mutation: deleteSuitReq,
      variables: {
        deleteSuitId,
      },
    });
  } catch (error) {
    console.error('Error deleting user:', error);
}
};
