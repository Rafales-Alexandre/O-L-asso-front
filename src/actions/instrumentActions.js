import { gql } from '@apollo/client/core';
import client from '../apolloClient';

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


export const Update_Instrument = gql`
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
      mutation: Update_Instrument,
      variables: {
        "updateInstrumentId": updateInstrumentId,
        "input": {
          input
        }
      },
    });
    dispatch({
      type: 'Update_Instrument',
      payload: response.data.updateInstrument,
    });
  } catch (error) {
    console.error("Erreur lors de la modification de l'instrument :", error);
  }
};

export const Create_Instrument= gql`
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
      mutation: Create_Instrument,
     variables: {
          "input": {
            input
          }
        },
      });
      dispatch({
        type: 'Update_Instrument',
        payload: response.data.updateInstrument,
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'instrument :", error);
    }
  };
  