import { FETCH_SUITS, ADD_SUIT, UPDATE_SUIT, DELETE_SUIT } from '../actions/suitActions';

const initialState = {
    suits: [],
};

export default function suitReducer(state = initialState, action = { type: '', payload: null }) {
  switch (action.type) {
    case FETCH_SUITS:
        return {
            ...state,
            suits: action.payload,
          };
    case ADD_SUIT:
    return {
        ...state,
        suits: [...state.suits, action.payload],
        };
    case UPDATE_SUIT:
        return {
            ...state,
            suits: state.suits.map((suit) =>
              suit.id === action.payload.id ? action.payload : suit
            ),
          };
    case DELETE_SUIT:
        return {
            ...state,
            suits: state.suits.filter((suit) => suit.id !== action.payload),
          };
    default:
      return state;
  }
}
