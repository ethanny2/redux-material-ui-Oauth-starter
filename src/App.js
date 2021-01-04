import { makeStyles } from '@material-ui/styles';
import Login from './Login';
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
			{/* <h1>App</h1> */}
      <Login></Login>
		</main>
	);
}

export default App;
