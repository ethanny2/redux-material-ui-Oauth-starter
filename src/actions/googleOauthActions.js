import { SIGN_IN, SIGN_OUT } from '../types';

export const googleOAuthLogin = (response) => async (dispatch, getState) => {
	const action = { type: SIGN_IN };
	let payload;
	if (typeof response === 'undefined' || response.error) {
		//If login fails
		console.log('LOGIN FAILED');
		payload = null;
	} else {
		payload = response;
	}
	action.payload = payload;
	console.log(action);
	dispatch(action);
};

export const googleOAuthLogout = (response) => async (dispatch, getState) => {
	const action = { type: SIGN_OUT };
	console.log('Calling googleOauthLogout');
	console.log({ response });
	dispatch(action);
};
