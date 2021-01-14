import { SHOW_ALERT, CLEAR_ALERT } from '../types';
import { ALERT_STATES } from '../reducers/alertReducer';

export const showAlert = (
	msgConfig = { message: 'default', severity: ALERT_STATES.info }
) => ({ type: SHOW_ALERT, payload: { ...msgConfig } });

export const clearAlert = () => ({ type: CLEAR_ALERT });
