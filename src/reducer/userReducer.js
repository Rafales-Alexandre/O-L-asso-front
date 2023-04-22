const initialState = {
  loggedInUser: null,
  users: [],
  instruments: [],
  suits: [],
};

const userReducer = (state = initialState, action = { type: '', payload: null }) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload };
    case 'LOGIN_USER':
      return { ...state, loggedInUser: action.payload };
    case 'LOGOUT_USER':
      return { ...state, loggedInUser: null };
    case 'FETCH_INSTRUMENTS':
      return { ...state, instruments: action.payload };
    case 'FETCH_SUITS':
      return { ...state, suits: action.payload };
    default:
      return state;
  }
};

export default userReducer;
