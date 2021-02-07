import { TOGGLE_THEME } from '../types';
/* Only light and dark themes */
import { createMuiTheme } from '@material-ui/core/styles';

const LIGHT_MODE_STATE = createMuiTheme({
	palette: {
		type: 'light', // This
		primary: {
			main: '#3f51b5', // and this are the only properties that need to be changed for dark mode
			contrastText: '#fff'
		}
	}
});

const DARK_MODE_STATE = createMuiTheme({
	palette: {
		type: 'dark', // This
		primary: {
			main: '#000', // and this are the only properties that need to be changed for dark mode
			contrastText: '#fff'
		}
	}
});



/*What up with this one need to debug */
const themeReducer = (state = LIGHT_MODE_STATE, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
      //There is no payload we just replace the theme obj/state with the
      //opposite of whatever type is 
      return state.palette.type === 'light' ? {...DARK_MODE_STATE} : {...LIGHT_MODE_STATE}
		default:
			return state;
	}
};

export default themeReducer; 