import * as React from 'react';
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
  };

  return (
  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
  		<Toolbar variant="dense">
        <b color="inherit">Andreas Olsson</b>
        <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>
                <MenuItem component={Link} onClick={handleClose} to="/UsersWithReversedNames">
                                                      			Users with reversed names
                                                      		</MenuItem>
                <MenuItem component={Link} onClick={handleClose} to="/ReversedString">
                                                              			Reveres a string
                                                              		</MenuItem>
                <MenuItem component={Link} onClick={handleClose} to="/Palindrome">
                                                              			Palindrome
                                                              		</MenuItem>
                <MenuItem component={Link} onClick={handleClose} to="/PadNumberWithZeros">
                                                              			Pad Number With Zeros
                                                              		</MenuItem>
                <MenuItem component={Link} onClick={handleClose} to="/NthLargestNumber">
                                                              			Nth Largest Number
                                                              		</MenuItem>
        </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
        <IconButton
             size="large"
             edge="end"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 10 }}
             onClick={handleClick}>
             <MenuIcon />
       </IconButton>
    </Toolbar>
    </AppBar>
    </Box>
  );
}