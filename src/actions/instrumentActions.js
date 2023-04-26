import { gql } from '@apollo/client/core';
import client from '../apolloClient';

const getInstrumentReq = gql`
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
    const { data } = await client.query({ query: getInstrumentReq });
    dispatch({ type: 'FETCH_INSTRUMENTS', payload: data });
  } catch (error) {
    /* console.error('Erreur lors de la récupération des instruments :', error); */
  }
};

export const upadteInstrumentReq = gql`
mutation Mutation($updateInstrumentId: ID!, $input: InstrumentInput) {
  updateInstrument(id: $updateInstrumentId, input: $input) {
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

export const updateInstrument = (updateInstrumentId, input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: upadteInstrumentReq,
      variables: {
        updateInstrumentId,
        input: {
          input,
        },
      },
    });
    dispatch({
      type: 'upadteInstrumentReq',
      payload: response.data.updateInstrument,
    });
  } catch (error) {
    /* console.error("Erreur lors de la modification de l'instrument :", error); */
  }
};

export const createInstrumentReq = gql`
mutation Mutation($input: InstrumentInput) {
  addInstrument(input: $input) {
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

export const createInstrument = (input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: createInstrumentReq,
      variables: {
        input,
      },
    });
    dispatch({
      type: 'upadteInstrumentReq',
      payload: response.data.updateInstrument,
    });
  } catch (error) {
    /* console.error("Erreur lors de la création de l'instrument :", error); */
  }
};

export const deleteInstruReq = gql`
mutation DeleteSuit($deleteInstrumentId: ID!) {
  deleteInstrument(id: $deleteInstrumentId)
}
`;
export const deleteInstru = async (deleteInstruId) => {
  try {
    await client.mutate({
      mutation: deleteInstruReq,
      variables: {
        deleteInstruId,
      },
    });
  } catch (error) {
    console.error('Error deleting user:', error);
}
};