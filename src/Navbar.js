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
  const [testing, setTesting] = React.useState(true);
  const [StringTemp, setStringTemp] = React.useState("");
  const [moreWeather, setMoreWeather] = React.useState("");
  const [stringLocation, setStringLocation] = React.useState("");
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

  const editTask = (event, e) => {
    /*console.log(event)
    var regex = "/,[0-9]+$/";
    var test = event
    test = test.replace(/[0-9]/g,"")
    test = test.replace("°C","")
    setStringTemp(test)*/
    //console.log(test)
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+event, options)
        .then(response => response.json())//{(setStringTemp(response.json()))})
        .then(response => {console.log(response)
        setStringLocation(response.location.name+" ")
        setStringTemp(response.current.temp_c + "°C")
        setMoreWeather("Luftfuktighet " + response.current.humidity + "%, Senast uppdaterad "+
        response.current.last_updated + ", Känns som: " + response.current.feelslike_c +
                                                  "°C, Vind " + response.current.wind_kph +"km/h")
        })
        .catch(err => setTesting(true));
    console.log("event")
  };

  const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
    });
/*
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '23d8e9f025mshebcaf991b47288fp19343fjsnead419c1708d',
    		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    	}
    };

    fetch('https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25', options)
    	.then(response => response.json())
    	.then(response => console.log(response))
    	.catch(err => console.error(err));
*/
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7b44d4e07bmshe4ed42cb744d1dep1e1759jsnd8396fc1cc77',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    if(testing){
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Stockholm', options)
            .then(response => response.json())//{(setStringTemp(response.json()))})
            .then(response => {console.log(response)
            setStringLocation(response.location.name+" ")
            setStringTemp(response.current.temp_c + "°C")
            setMoreWeather("Luftfuktighet " + response.current.humidity + "%, Senast uppdaterad "+
            response.current.last_updated + ", Känns som: " + response.current.feelslike_c +
                                                      "°C, Vind " + response.current.wind_kph +"km/h")
            })
            .catch(err => console.error(err));
            setTesting(false);
            //console.log(StringTemp)
    }/*contenteditable="true" handleClose={e => editTask(e.currentTarget.textContent)}*/

    const handleKeyDown = (event) => {
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Stockholm', options)
            .then(response => response.json())//{(setStringTemp(response.json()))})
            .then(response => {console.log(response)
            setStringLocation(response.location.name+" ")
            setStringTemp(response.current.temp_c + "°C")
            setMoreWeather("Luftfuktighet " + response.current.humidity + "%, Senast uppdaterad "+
            response.current.last_updated + ", Känns som: " + response.current.feelslike_c +
                                                      "°C, Vind " + response.current.wind_kph +"km/h")
            })
            .catch(err => console.error(err));
            setTesting(false);
      }
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
       <b class="test5">
           <b3 contenteditable="true" handleClose={e => editTask(e.currentTarget.textContent)}
           onKeyPress={(e) => { (e.key === 'Enter' || e.key === 'return') && editTask(e.currentTarget.textContent, e.preventDefault())}}>{stringLocation}
           </b3>
           <b3>{StringTemp}</b3>
           <b1 class="addText5">{moreWeather}</b1>
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