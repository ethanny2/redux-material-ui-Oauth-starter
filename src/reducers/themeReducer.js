import { TOGGLE_THEME } from '../types';
import { createMuiTheme } from '@material-ui/core/styles';
/*If no other key-val pairs are set on the custom theme it retains
all the default MUI theme values. So for a simple switch to dark mode this
will suffice.
Actually switching to dark doesn't change palette values so I have
to do that manually
light mode main color: #4285F4
dark mode main color: #fff
*/
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