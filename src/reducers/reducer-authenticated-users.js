const SET_AUTHENTICATING = 'SET_AUTHENTICATING';
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const SET_AUTHENTICATION_ERROR = 'SET_AUTHENTICATION_ERROR';
export default function reducer(state = {
  isAuthenticated: false,
  isAuthenticating: false,
  authenticationError: null
}, action) {
  switch (action.type) {
    case SET_AUTHENTICATING:
      return Object.assign({}, state, {
        isAuthenticating: action.isAuthenticating
      });

    case SET_AUTHENTICATED:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated
      });

    case SET_AUTHENTICATION_ERROR:
      return Object.assign({}, state, {
        authenticationError: action.authenticationError
      });

    default:
      return state;
  }
}