import { gql } from '@apollo/client/core';
import client from '../apolloClient';

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

export const Update_Suit = gql`
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
      mutation: Update_Suit,
      variables: {
        "updateSuitId": updateSuitId,
        "input": {
          input
        }
      },
    });
    dispatch({
      type: 'Update_Suit',
      payload: response.data.updateSuit,
    });
  } catch (error) {
    console.error("Erreur lors de la modification du costume :", error);
  }
};

export const Create_Suit = gql`
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
      mutation: Create_Suit,
      variables: {
        "input": {
          input
        }
      },
    });
  } catch (error) {
    console.error("Erreur lors de la création du costume :", error);
  }
};