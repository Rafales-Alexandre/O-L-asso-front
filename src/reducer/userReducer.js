const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null,
  users: [],
  instruments: [],
  suits: [],
  token: null,
};

const userReducer = (state = initialState, action = { type: '', payload: null }) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload };
    case 'LOGIN_USER':
      localStorage.setItem('loggedInUser', JSON.stringify(action.payload));
      return { ...state, loggedInUser: action.payload };
    case 'LOGOUT_USER':
      localStorage.removeItem('loggedInUser');
      return { ...state, loggedInUser: null };
    case 'FETCH_INSTRUMENTS':
      return { ...state, instruments: action.payload };
    case 'FETCH_SUITS':
      return { ...state, suits: action.payload };
    case 'TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default userReducer;
