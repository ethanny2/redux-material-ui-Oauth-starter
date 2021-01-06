import React from 'react';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { googleOAuthLogin, googleOAuthLogout } from './actions/';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>

//     </Container>
//   );
// }

const Login = ({ googleOAuthLogin, auth }) => {
	const classes = useStyles();
	const renderUI = () => {
		if (!auth.isSignedIn) {
			return (
				<>
					<h1>Login</h1>
					<GoogleLogin
						clientId='143814432776-d52d5uapdbufmmt0epop4upk71g4fghi.apps.googleusercontent.com'
						buttonText='Login'
						onSuccess={googleOAuthLogin}
						onFailure={googleOAuthLogin}
						cookiePolicy={'single_host_origin'}
					/>
				</>
			);
		} else {
			const {
				isSignedIn,
				user: {
					accessToken,
					profileObj: { email, name, imageUrl, googleId }
				}
			} = auth;
			return (
				<>
					<h1>Logout</h1>
					<GoogleLogout
						clientId='143814432776-d52d5uapdbufmmt0epop4upk71g4fghi.apps.googleusercontent.com'
						buttonText='Logout'
            onLogoutSuccess={googleOAuthLogout}
					></GoogleLogout>
				</>
			);
		}
	};

	return <section className={classes.paper}>{renderUI()}</section>;
};

function mapStateToProps(state) {
	//Here you can get whatever the component needs from redux store...
	console.log({ state });
	return { auth: state.auth };
}

export default connect(mapStateToProps, {
	googleOAuthLogin,
	googleOAuthLogout
})(Login);
//Client secret
//143814432776-d52d5uapdbufmmt0epop4upk71g4fghi.apps.googleusercontent.com

//Client id
//HovqbtzfM5tz79mcMr3rn73z
