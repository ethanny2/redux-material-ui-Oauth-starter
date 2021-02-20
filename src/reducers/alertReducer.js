import { SHOW_ALERT, CLEAR_ALERT } from '../types';


/* Matches props of  <Snackbar /> component from Material UI*/
const INITIAL_STATE = {
	open: false,
	message: '',
	anchorOrigin: { vertical: 'top', horizontal: 'center' },
	autoHideDuration: 3500
};

const alertReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			/*
       action.payload looks like
        {message:''}
      */
			return { ...state, open: true, ...action.payload };
		case CLEAR_ALERT:
			return { ...INITIAL_STATE };
		default:
			return state;
	}
};

export default alertReducer;
