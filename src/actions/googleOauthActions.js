import { SIGN_IN, SIGN_OUT } from '../types';

export const googleOAuthLogin = (response) => {
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
	return action;
};

export const googleOAuthLogout = (response) => {
	const action = { type: SIGN_OUT };
	console.log('Calling googleOauthLogout');
  console.log({ response });
  /*Now manually dispatch */
	return action;
};
