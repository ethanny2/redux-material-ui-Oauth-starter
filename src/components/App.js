import { makeStyles,  } from '@material-ui/core/styles';
import Login from './Login';
import NavBar from './NavBar';
import Alert from './Alert';

/*
	Returns JSS styling object; as for theming just sticking with
	the default Material UI lightmode style sheet
	https://material-ui.com/customization/default-theme/
	Also want to add in DARK MODE!!!!
	https://material-ui.com/customization/palette/
	Spacing 8px per unit
	https://material-ui.com/customization/components/
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
			width: '100%',
			boxSizing: 'border-box'
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
	return (
		<main className={`${classes.root} cssjss-advanced-global-root`}>
			<Alert />
			<NavBar></NavBar>
			<Login></Login>
		</main>
	);
}

export default App;
