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

let INITIAL_STATE = {};
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
		type: 'dark', 
		primary: {
			main: '#000', 
			contrastText: '#fff'
		}
	}
});

/* Choose the default theme as the users system preferences */
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
matched
	? (INITIAL_STATE = { ...DARK_MODE_STATE })
	: (INITIAL_STATE = { ...LIGHT_MODE_STATE });

/*What up with this one need to debug */
const themeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			//There is no payload we just replace the theme obj/state with the
			//opposite of whatever type is
			return state.palette.type === 'light'
				? { ...DARK_MODE_STATE }
				: { ...LIGHT_MODE_STATE };
		default:
			return state;
	}
};

export default themeReducer;
