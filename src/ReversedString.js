import React, {useEffect, useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@material-ui/core/Box'

class ReversedString extends React.Component {
   constructor(props) {
     super(props);
     this.state = {value: "",
     reversedString: ""};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("string", this.state.value);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("http://localhost:8088/api/methods/reversestring", requestOptions)
      .then(response => response.text())
      .then(result => this.setState({reversedString: result}))
      .catch(error => console.log('error', error));
    event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
       <ol>
         <TextField type="text" id="standard-basic" label="Enter a text to reverse:" variant="standard"  value={this.state.value} onChange={this.handleChange}/>
         <Button id="outlined-basic" label="Outlined" variant="outlined" type="submit" >
           Submit
         </Button>
        <Box>
          <label>
           <b>Reversed text result:</b> {this.state.reversedString}
          </label>
        </Box>
        </ol>
       </form>
     );
   }
 }

export default ReversedString;