import { SHOW_ALERT, CLEAR_ALERT } from '../types';
import Grow from '@material-ui/core/Grow';

export const ALERT_STATES = {
	error: 'error ',
	warning: 'warning',
	info: 'info',
	success: 'success'
};

Object.freeze(ALERT_STATES);

const INITIAL_STATE = {
	open: false,
	severity: ALERT_STATES.info,
	message: '',
	anchorOrigin: { vertical: 'top', horizontal: 'center' },
  TransitionComponent: Grow,
  autoHideDuration: 3500,
};

const alertReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			/*
       action.payload looks like
        {message:'', severity: ''}
      */
     console.log('IN REDUCER FOR SHOW ALERT');
			return { ...state, open: true, ...action.payload };
		case CLEAR_ALERT:
			return { ...INITIAL_STATE };
		default:
			return state;
	}
};

export default alertReducer; 