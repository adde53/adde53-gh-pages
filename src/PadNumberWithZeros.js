import React, {useEffect, useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@material-ui/core/Box'

class PadNumberWithZeros extends React.Component {
   constructor(props) {
     super(props);
     this.state = {value: "",
     padnumberwithzeroes:""};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   handleSubmit(event) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("number", this.state.value);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:8088/api/methods/padnumberwithzeroes", requestOptions)
      .then(response => response.text())
      .then(result => this.setState({padnumberwithzeroes: result}))
      .catch(error => console.log('error', error));
    event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
       <ol>
         <TextField type="number" id="standard-basic" label="Enter a number" variant="standard"  value={this.state.value} onChange={this.handleChange}/>
         <Button id="outlined-basic" label="Outlined" variant="outlined" type="submit" >
          Submit
         </Button>
       <Box>
       <label>
         <b>{this.state.padnumberwithzeroes}</b>
       </label>
       </Box>
       </ol>
       </form>
     );
   }
 }

export default PadNumberWithZeros;