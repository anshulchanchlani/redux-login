import db  from '../.././dummydb/db.json';
const SET_AUTHENTICATING = 'SET_AUTHENTICATING';
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const SET_AUTHENTICATION_ERROR = 'SET_AUTHENTICATION_ERROR';


export function authenticateUser(email, password) {
  let flag= false;
  return dispatch => {
    dispatch(authenticating(true));
    dispatch(authenticated(false));
    dispatch(authenticationError(null));

    if(db.users.forEach(function(user){
        if(user.email==email && user.password == password){
            flag= true;
            dispatch(authenticating(false))
            dispatch(authenticated(true));
            console.log("authenticated!!!!")
            return;
            
        }
    }))
    if(!flag){
        dispatch(authenticationError("Invalid User Credentials"))
    }
  }
}

function authenticating(isAuthenticating) {
  return {
    type: SET_AUTHENTICATING,
    payload: isAuthenticating
  };
}

function authenticated(isAuthenticated) {
  return {
    type: SET_AUTHENTICATED,
    payload: isAuthenticated
  };
}

function authenticationError(authenticationError) {
  return {
    type: SET_AUTHENTICATION_ERROR,
    payload:authenticationError
  }
}