import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Alert from './Alert';
import Login from './Login';
import Logout from './Logout';
import ThemeProvider from './ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

/*
	Spacing 8px per unit
	https://material-ui.com/customization/components/
	More on CSS baseline 
	https://material-ui.com/components/css-baseline/
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
