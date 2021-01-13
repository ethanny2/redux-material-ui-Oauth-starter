import { SIGN_IN, SIGN_OUT } from '../types';

const INITIAL_STATE = {
	loggedIn: false,
	user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			let loggedIn = action.payload ? true : false;
			return { ...state, loggedIn, user: { ...action.payload } };
		case SIGN_OUT:
			console.log({ state });
			console.log('Logged out successfully');
			return { ...state, loggedIn: false, user: null };
		default:
			return state;
	}
};

export default authReducer;
