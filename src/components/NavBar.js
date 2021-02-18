import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Switch from '@material-ui/core/Switch';
import { toggleTheme } from '../actions/themeActions';
import { useDispatch, useSelector } from 'react-redux';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	nav: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText
	},
	themeToggle: {
		[theme.breakpoints.up('sm')]: {
			padding: 0
		}
	},
	imageContainer: {
		maxWidth: '100%',
		height: 'auto',
		'& img': {
			width: '2em'
		}
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	}
}));

const NavBar = () => {
	const classes = useStyles();
	/* Should hold reference to DOM element, set anchorEl when
  menu is clicked open. Different menus for desktop and mobile*/
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	const { auth, theme } = useSelector((state) => state);
	/*
    Coersion to force the null value to false and any DOM
    element to true. Used in place of putting the state
    for both anchorEl and a boolean called "open" into a useState({}) object
    When the state setters are called for the anchorEls the component re-renders
    and the boolean values are re-evaluated 
  */
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	/*The anchor pieces of state need to either be null or have a DOM element */
	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};
	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const menuId = 'primary-search-account-menu';

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			{/* Change here if you want to link to other resoruces! */}
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	/*Need to add switch in here */
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			{/* Change here if you want to link to other resoruces! */}
			<MenuItem>
				<IconButton aria-label='show 1 new mails' color='inherit'>
					<Badge badgeContent={1} color='secondary'>
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label='show 1 new notifications' color='inherit'>
					<Badge badgeContent={1} color='secondary'>
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					color='inherit'
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label='toggle dark mode'>
					<Switch
						color='default'
						checked={theme.palette.type === 'dark'}
						onChange={() => dispatch(toggleTheme())}
						inputProps={{ 'aria-label': 'primary checkbox' }}
						name='themeToggle'
					></Switch>
				</IconButton>
				<p>Theme </p>
			</MenuItem>
		</Menu>
	);

	return (
		<header className={classes.grow}>
			<AppBar position='static' component='div'>
				<Toolbar component='nav' className={classes.nav}>
					<Typography className={classes.title} variant='h6' noWrap>
						Google Oauth Redux
					</Typography>
					{/* 
            For creating space between left menu items and right menu items;
            is margin auto potentially a solution? 
          */}
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{/* Change here if you want to link to other resoruces! */}
						{auth.user ? (
							<>
								{/* On is dark mode off is light */}
								<IconButton aria-label='toggle dark mode'>
									<Switch
										color='default'
										checked={theme.palette.type === 'dark'}
										onChange={() => dispatch(toggleTheme())}
										inputProps={{ 'aria-label': 'primary checkbox' }}
										name='themeToggle'
									></Switch>
								</IconButton>

								<IconButton aria-label='show 0 new mails' color='inherit'>
									<Badge badgeContent={1} color='secondary'>
										<MailIcon />
									</Badge>
								</IconButton>
								<IconButton
									aria-label='show 0 new notifications'
									color='inherit'
								>
									<Badge badgeContent={1} color='secondary'>
										<NotificationsIcon />
									</Badge>
								</IconButton>
								<IconButton
									edge='end'
									aria-label='account of current user'
									aria-controls={menuId}
									aria-haspopup='true'
									onClick={handleProfileMenuOpen}
									color='inherit'
								>
									<div className={classes.imageContainer}>
										<img src={auth.user.imageUrl} alt={auth.user.givenName} />
									</div>
								</IconButton>
							</>
						) : (
							<>
								<Typography variant='h6' component='h6'>
									Not Logged in
								</Typography>
							</>
						)}
					</div>
					<div className={classes.sectionMobile}>
						{auth.user ? (
							<>
								<IconButton
									aria-label='show more'
									aria-controls={mobileMenuId}
									aria-haspopup='true'
									onClick={handleMobileMenuOpen}
									color='inherit'
								>
									<MoreIcon />
								</IconButton>
							</>
						) : (
							<Typography variant='h6' component='h6'>
								Not Logged in
							</Typography>
						)}
					</div>
				</Toolbar>
			</AppBar>
			{/* These are not rendered till anchorEl is set, which only happens
      after the menu button is clicked. Both menus are controlled by media
      queries so only one version (desktop or mobile) is displayed at once */}
			{renderMobileMenu}
			{renderMenu}
		</header>
	);
};

export default NavBar;
