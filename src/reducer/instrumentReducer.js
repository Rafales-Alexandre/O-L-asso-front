import { FETCH_INSTRUMENTS, ADD_INSTRUMENT, UPDATE_INSTRUMENT, DELETE_INSTRUMENT } from '../actions/instrumentActions';

const initialState = {
    instruments: [],
};

export default function instrumentReducer(state = initialState, action = { type: '', payload: null }) {
  switch (action.type) {
    case FETCH_INSTRUMENTS:
        return {
            ...state,
            instruments: action.payload,
          };
    case ADD_INSTRUMENT:
    return {
        ...state,
        intruments: [...state.instruments, action.payload],
        };
    case UPDATE_INSTRUMENT:
        return {
            ...state,
            intruments: state.instruments.map((instrument) =>
              instrument.id === action.payload.id ? action.payload : instrument
            ),
          };
    case DELETE_INSTRUMENT:
        return {
            ...state,
            intruments: state.instruments.filter((instrument) => instrument.id !== action.payload),
          };
    default:
      return state;
  }
}
