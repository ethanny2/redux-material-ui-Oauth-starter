import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Alert from './Alert';
import Login from './Login';
import Logout from './Logout';
import ThemeProvider from './ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

/*
	Returns JSS styling object; as for theming just sticking with
	the default Material UI lightmode style sheet
	https://material-ui.com/customization/default-theme/
	Also want to add in DARK MODE!!!!
	https://material-ui.com/customization/palette/
	Spacing 8px per unit
	https://material-ui.com/customization/components/
	More on CSS baseline 
	https://material-ui.com/components/css-baseline/
	Type dark on the theme only changes these properties
	palette.text
	palette.divider
	palette.background
	palette.action
	So using theme.palette.primary.main or any others
	will not see any change when type is switched to dark
*/
const useStyles = makeStyles({
	root: {
		margin: '0',
		color: 'black',
		fontFamily: 'Georgia, Times, serif'
	},
	'@global': {
		'html, body': {
			margin: 0,
			padding: 0,
			height: '100%',
			width: '100%'
		},
		'*, *:before, *:after': {
			boxSizing: 'inherit'
		},
		'.cssjss-advanced-global-root': {
			height: '100%',
			width: '100%'
		}
	}
});

function App() {
	const classes = useStyles();
	const auth = useSelector((state) => state.auth);
	return (
		<ThemeProvider>
			<CssBaseline />
			<main className={`${classes.root} cssjss-advanced-global-root`}>
				<NavBar></NavBar>
				<Alert />
				{auth.loggedIn ? <Logout /> : <Login />}
			</main>
		</ThemeProvider>
	);
}

export default App;
