const initialState = {
  loggedInUser: null,
  users: [],
  instruments: [],
  suits: [],
};

const userReducer = (state = initialState, action) => {
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
      console.log("State updated in reducer: ", { ...state, suits: action.payload }); // Add this line
      return { ...state, suits: action.payload };
    default:
      return state;
  }
};

export default userReducer;
