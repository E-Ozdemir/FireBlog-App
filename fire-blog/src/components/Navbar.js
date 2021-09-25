import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import logo from '../assets/cw.jpeg'
import { useHistory } from 'react-router';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    logo: {
      maxWidth: 40,
      marginRight: '10px'
    },
    // toolbar: {
    //   display: 'flex',
    //   justifyContent: 'space-between'
    // }
    
  })
);


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const history = useHistory();

  function goLoginPage() {
    history.push("/login");
  }
  function goRegisterPage() {
    history.push("/register");
  }
  function goMainPage() {
    history.push("/");
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static">
        <Toolbar text-align= "center">
          <Typography>
            <img src={logo} alt="Clrswy Logo" className={classes.logo} onClick={goMainPage}/>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <code>{"<ÖZDMR/>"}</code>
              <span className="">BLOG</span>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={goLoginPage}>Login</MenuItem>
                <MenuItem onClick={goRegisterPage}>Register</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}