const initialState = {
    loggedInUser: null,
    users:[],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return { ...state, users: action.payload };
      case 'LOGIN_USER':
        return { ...state, loggedInUser: action.payload };
      case 'LOGOUT_USER':
        return { ...state, loggedInUser: null };
      default:
        return state;
    }
  };
  
  export default userReducer;
  