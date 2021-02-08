import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';




function Theme({ children, theme }) {
  //Some redux store function to create a new theme; keep
  //theme object in redux store??? When theme changes
  // call some action creator change the type then the provider
  // re-renders and the whole app changes/.

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}


function mapStateToProps(state, ownProps) {
	//Here you can get whatever the component needs from redux store...
	return { theme: state.theme };
}

export default connect(mapStateToProps, {})(Theme);
