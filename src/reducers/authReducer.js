import { SIGN_IN, SIGN_OUT } from './../actions/types';

const INITIAL_STATE = {
	isSignedIn: false,
	user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			let isSignedIn = action.payload ? true : false;
			return { ...state, isSignedIn, user: { ...action.payload } };
		case SIGN_OUT:
			console.log({ state });
			console.log('In sign OUT');
			return { ...state, isSignedIn: false, user: null };
		default:
			return state;
	}
};

export default authReducer;
