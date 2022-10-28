import * as React from 'react';
import { Component, useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CloseIcon from '@mui/icons-material/Close';
import './AboutMe.css';

export default function Navbar() {
  const [age, setAge] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
    setAnchorEl(null);
  };

  const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
    });

  return (
  <Box sx={{ flexGrow: 1 }}>

  		<IconButton class="button btn button5"
             size="large"
             edge="end"
             color="inherit"
             aria-label="menu"
             onClick={handleClick}>
             <span><MenuIcon /> </span>
        </IconButton>
        <div style={{float: 'right'}}>
                    <IconButton class="button btn button5"
                     size="large"
                     edge="end"
                     color="inherit"
                     aria-label="menu"
                     onClick={() => setState({ isPaneOpen: true })}
                    >
                     <span><MenuIcon /> </span>
                    </IconButton>
       </div>

       <b class="test">
         <b>Andreas Olsson</b>
         <b class="addText">23 år</b>
       </b>
       <SlidingPane
        width="200px"
        closeIcon={<div></div>}
        //className="some-custom-class"
        //overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        //title="Hey, it is optional pane title.  I can be React component too."
        //subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
       >
       <div>
            <Button component={Link} onClick={() => setState({ isPaneOpen: false })} to="/About">
            About
            </Button>

        </div>
        <div>
            <Button component={Link} onClick={() => setState({ isPaneOpen: false })} to="/Shorts">
            Shorts
            </Button>
        </div>
       <IconButton class="button btn button6"
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setState({ isPaneOpen: false })}
           >
             <span><CloseIcon /> </span>
       </IconButton>
     </SlidingPane>

    </Box>
  );
}


//<AppBar position="static" class="sticky-nav" color="inherit">
  		//<Toolbar variant="dense">

  		    //</Toolbar>
            //</AppBar>