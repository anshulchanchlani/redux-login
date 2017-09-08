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
    console.log("Calling this db shit")
    if(db.users.forEach(function(user){
        if(user.email===email && user.password === password){
            flag= true;
            console.log("inside this db shit")
            dispatch(authenticating(false))
            dispatch(authenticated(true));
            dispatch(authenticationError(null))
            return;
            
        }
    }))
    console.log("")
    if(flag===false){
      console.log("FLAG IS FALSE")
        dispatch(authenticationError("Invalid User Credentials"));
        dispatch(authenticating(false));
        dispatch(authenticated(false));
    }
  }
}

function authenticating(isAuthenticating) {
  return {
    type: SET_AUTHENTICATING,
    isAuthenticating
  };
}

function authenticated(isAuthenticated) {
  console.log("Action is authenticated")
  return {
    type: SET_AUTHENTICATED,
    isAuthenticated
  };
}

function authenticationError(authenticationError) {
  console.log("Authentication Error in action", authenticationError)
  return {
    type: SET_AUTHENTICATION_ERROR,
    authenticationError
  }
}