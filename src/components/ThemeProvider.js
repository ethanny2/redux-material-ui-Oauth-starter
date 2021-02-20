import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

function Theme({ children }) {
	const theme = useSelector((state) => state.theme);
	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default Theme;
