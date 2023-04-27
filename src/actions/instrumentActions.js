import { gql } from '@apollo/client/core';
import client from '../apolloClient';

export const FETCH_INSTRUMENTS = 'FETCH_INSTRUMENTS';
export const ADD_INSTRUMENT = 'ADD_INSTRUMENT';
export const UPDATE_INSTRUMENT = 'UPDATE_INSTRUMENT';
export const DELETE_INSTRUMENT = 'DELETE_INSTRUMENT';

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
export const deleteInstruReq = gql`
mutation DeleteInstrument($deleteInstrumentId: ID!) {
  deleteInstrument(id: $deleteInstrumentId)
}
`;

export const fetchInstruments = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: getInstrumentReq });
    dispatch({ type: 'FETCH_INSTRUMENTS', payload: data.getAllInstruments });
  } catch (error) {
    /* console.error('Erreur lors de la récupération des instruments :', error); */
  }
};

export const updateInstrument = (updateInstrumentId, input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: upadteInstrumentReq,
      variables: {
        updateInstrumentId,
        input,
      },
    });
    dispatch({
      type: 'UPDATE_INSTRUMENT',
      payload: response.data.updateInstrument,
    });
  } catch (error) {
    console.error("Erreur lors de la modification de l'instrument :", error);
  }
};

export const createInstrument = (input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: createInstrumentReq,
      variables: {
        input,
      },
    });
    dispatch({
      type: 'ADD_INSTRUMENT',
      payload: response.data.addInstrument,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'instrument :", error);
  }
};

export const deleteInstru = (InstruId) => async (dispatch) => {
  try {
    await client.mutate({
      mutation: deleteInstruReq,
      variables: {
        deleteInstrumentId: InstruId,
      },
    });
    dispatch({
      type: 'DELETE_INSTRUMENT',
      payload: InstruId,
    })
  } catch (error) {
    console.error('Error deleting user:', error);
}
};