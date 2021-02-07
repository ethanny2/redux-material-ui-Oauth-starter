import React, {useState} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/*If no other key-val pairs are set on the custom theme it retains
all the default MUI theme values. So for a simple switch to dark mode this
will suffice.
Actually switching to dark doesn't change palette values so I have
to do that manually
light mode main color: #4285F4
dark mode main color: #fff
*/
const theme = createMuiTheme({
	palette: {
    type: 'light', // This
    primary: { 
      main: '#3f51b5', // and this are the only properties that need to be changed for dark mode
      contrastText: '#fff'
    }
	}
});

function Theme({ children }) {
  //Some redux store function to create a new theme; keep
  //theme object in redux store??? When theme changes
  // call some action creator change the type then the provider
  // re-renders and the whole app changes/.

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default Theme;
