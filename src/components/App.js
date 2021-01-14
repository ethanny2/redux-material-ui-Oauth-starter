import { makeStyles } from '@material-ui/styles';
import Login from './Login';
import NavBar from './NavBar';
import Alert from './Alert';

/*Returns JSS styling object;*/
const useStyles = makeStyles({
	root: {
		margin: '0',
		color: 'black',
		fontFamily: 'Georgia, Times, serif',
		boxSizing: 'border-box'
	}
});

function App() {
	const classes = useStyles();
	return (
		<main className={classes.root}>
			<Alert />
			<NavBar></NavBar>
      <Login></Login>
		</main>
	);
}

export default App;
