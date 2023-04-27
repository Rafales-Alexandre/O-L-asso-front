import { FETCH_USERS,FETCH_USERS_SUIT, ADD_USER, UPDATE_USER, DELETE_USER } from "../actions/userActions";

const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null,
  users: [],
  userSuits: [],
  token: null,
};

const userReducer = (state = initialState, action = { type: '', payload: null }) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case FETCH_USERS_SUIT:
        return {
          ...state,
          userSuits: action.payload,
          };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        };
    case UPDATE_USER:
      return {
            ...state,
            users: state.users.map((user) =>
              user.id === action.payload.id ? action.payload : user
            ),
          };
    case DELETE_USER:
      return {
            ...state,
            users: state.users.filter((user) => user.id !== action.payload),
          };
    case 'LOGIN_USER':
      localStorage.setItem('loggedInUser', JSON.stringify(action.payload));
      return { ...state, loggedInUser: action.payload };
    case 'LOGOUT_USER':
      localStorage.removeItem('loggedInUser');
      return { ...state, loggedInUser: null };
    case 'TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default userReducer;
