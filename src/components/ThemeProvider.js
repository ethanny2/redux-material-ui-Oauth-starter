import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

function Theme({ children }) {
	//Some redux store function to create a new theme; keep
	//theme object in redux store??? When theme changes
	// call some action creator change the type then the provider
	// re-renders and the whole app changes/.
	const theme = useSelector((state) => state.theme);
	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default Theme;
