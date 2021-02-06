import React, {useState} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/*If no other key-val pairs are set on the custom theme it retains
all the default MUI theme values. So for a simple switch to dark mode this
will suffice. */
const theme = createMuiTheme({
	palette: {
		type: 'dark'
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
