import { SIGN_IN, SIGN_OUT } from '../types';

const INITIAL_STATE = {
	loggedIn: false,
	user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			console.log({action});
			let loggedIn = action.payload ? true : false;
			console.log('Logged IN successfully AUTHREDUCER');
			return loggedIn
				? {
						...state,
						loggedIn,
						user: {
							tokenId: action.payload.tokenId,
							...action.payload.profileObj
						}
				  }
				: { ...state, loggedIn, user: null };
		case SIGN_OUT:
			console.log({ state });
			console.log('Logged out successfully AUTHREDUCER');
			return { ...state, loggedIn: false, user: null };
		default:
			return state;
	}
};

export default authReducer;
