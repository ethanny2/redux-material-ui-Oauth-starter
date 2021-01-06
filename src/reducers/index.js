import {combineReducers} from 'redux';
import authReducer from './authReducer';
// const INITIAL_STATE = {
// 	isSignedIn: null,
// 	userId: null
// };


export default combineReducers({
 auth: authReducer
});