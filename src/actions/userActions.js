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
}
`;
export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await client.query({ query: Get_User });
    dispatch({ type: 'FETCH_USERS', payload: data });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
  }
};

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


export const Create_User = gql`
mutation Mutation($input: UserInput) {
  addUser(input: $input) {
    lastname
  }
}
`;
export const createUser = ( input) => async (dispatch) => {
  try {
    const response = await client.mutate({
      mutation: Create_User,
      variables: {
        "input": {
          input
        }
      },
    });
  } catch (error) {

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
  }catch (error) {
    console.error("Erreur lors de la création de l'instrument :", error);
  }
};

export const Update_Suit= gql`
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

export const Create_Suit= gql`
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
}`
;
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
