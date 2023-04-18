const initialState = {
    loggedInUser: null,
    users: [],
    instruments: [],
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
      default:
        return state;
    }
  };
  
  export default userReducer;
  