import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DensityMediumSharpIcon from '@mui/icons-material/DensityMediumSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

function Nav() {

  let navBarArray = [`Dashboard`, 'Unrated', 'Previous', `Log Out`];
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
  });

  if(user.type === 'Artist'){
    navBarArray = ['Dashboard', 'Rate Venues', 'Previous Rated', `Log Out`]
  } else if(user.type === 'Venue'){
    navBarArray = ['Dashboard', 'Rate Artists', 'Previous Rated', `Log Out`]
  } else {
    navBarArray = ['Dashboard', 'Current Matching', `Log Out`]
  }


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    


    <Box >
      <List>
        {navBarArray.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                if (text === 'Dashboard') {
                  navigate('/user');
                } else if (text === 'Rate Venues') {
                  navigate('/about');
                } else if (text === 'Rate Artists') {
                  navigate('/about');
                } else if (text === `Log Out`) {
                  dispatch({ type: 'LOGOUT' })
                } else if (text === 'Previous Rated') {
                  navigate('/info')
                } 
              }}
            >
              <ListItemText primary={text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Porchfest</h2>
      </Link>
    <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
       
            <Link className="navLink" to="/login">
              Login
            </Link>
   
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
            <div>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer('left', true)}
                style={{color: 'white', backgroundColor: 'black'}}
                ><DensityMediumSharpIcon className="icon-large" ></DensityMediumSharpIcon></Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
