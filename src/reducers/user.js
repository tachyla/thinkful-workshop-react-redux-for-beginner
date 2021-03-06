export const initialState = {
  isLogged: false,
  isAdmin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
