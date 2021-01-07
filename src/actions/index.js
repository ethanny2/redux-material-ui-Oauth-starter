import { SIGN_IN, SIGN_OUT } from './../actions/types';

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

export const googleOAuthLogout = () => async (dispatch, getState) => {
	const action = { type: SIGN_OUT };
	console.log('Calling googleOauthLogout');
	dispatch(action);
};

// export const createStream = (formValues) => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   const response = await streams.post('/streams', { ...formValues, userId });
//   dispatch({ type: CREATE_STREAM, payload: response.data });
//   //Navigate to home page after request is done (we awaited)
//   history.push('/');
// }

// export const fetchStreams = () => async dispatch => {
//   const response = await streams.get('/streams');
//   dispatch({ type: FETCH_STREAMS, payload: response.data })
// }

// export const fetchStream = (streamId) => async dispatch => {
//   console.log('Calling fetch stream');
//   const response = await streams.get(`/streams/${streamId}`);
//   dispatch({ type: FETCH_STREAM, payload: response.data })
// }

// export const editStream = (streamId, formValues = {}) => async dispatch => {
//   console.log(`Calling editStream()`);
//   /*
//   PUT  VS PATCH:

//   -> PUT : The data/object you send to update the data will use your object and
//   any fields it has to entirely delete the record with the old ID and PUT
//   the new record of data in its place. Bascially replace a record
//   -> PATCH: The data/object you send to update the data will only use the properties
//   you attached on the object to update those specified fields. Any fields you did not
//   include remain on the record in the database. Since our request to edit a stream
//   doesn't include the userId or ID (just title and description we update) we should instead
//   make this a patch command.
//   Normal id is not replaced as that is how the API for json server and most
//   backend DBs work
//   */

//   const response = await streams.patch(`/streams/${streamId}`, formValues);
//   dispatch({ type: EDIT_STREAM, payload: response.data });
//   history.push('/');
// }

// export const deleteStream = (streamId) => async dispatch => {
//   await streams.delete(`/streams/${streamId}`);
//   dispatch({ type: DELETE_STREAM, payload: streamId });
//   history.push('/');
// }
