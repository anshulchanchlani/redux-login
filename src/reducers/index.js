//This is the file where we combine all the reducers.
import {combineReducers} from 'redux';
import AuthenticationReducer from './reducer-authenticated-users';

//Now everywhere we will access UserReducer by user.
const allReducers = combineReducers({
    authenticationReducer:AuthenticationReducer,
    
})
export default allReducers;