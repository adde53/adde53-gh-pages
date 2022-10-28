import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Shorts from './Shorts';
import AboutMe from './AboutMe';
/*import UsersWithReversedNames from './UsersWithReversedNames';
import ReversedString from './ReversedString';
import Palindrome from './Palindrome';
import PadNumberWithZeros from './PadNumberWithZeros';
import NthLargestNumber from './NthLargestNumber';*/

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<AboutMe />} />
		<Route path='/About' element={<AboutMe/>} />
		<Route path='/Shorts' element={<Shorts/>} />
	</Routes>
	</Router>
);
}

export default App;
/*import logo from './logo.svg';
import './App.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { IconButton } from '@mui/material';

function App() {
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
        <div className="shopping-list">
          <h1>Shopping List for Andreas</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
            <button class="button button1">2px</button>
            <button class="button button2">4px</button>
            <button class="button button3">8px</button>
            <button class="button button4">12px</button>

          </ul>

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
              <IconButton class="button button5"
                onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
        </div>
      );
}

export default App;*/
//{this.props.name}