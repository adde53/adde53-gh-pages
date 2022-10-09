import React, {useEffect, useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@material-ui/core/Box'

class UsersWithReversedNames extends React.Component {
   constructor(props) {
     super(props);
     this.state = {value: '',
     jsonWithFirstname:[]};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   handleSubmit(event) {
   var requestOptions = {
                 method: 'GET',
                 redirect: 'follow'
               };
         fetch("http://localhost:8088/api/methods/userswithreversednames", requestOptions)
         .then(response => response.json())
         .then((data) => {
            console.log(data);
            this.setState({
                         jsonWithFirstname: data
                       });
         })
     event.preventDefault();
   }

   render() {
     return (
       <form onSubmit={this.handleSubmit}>
       <Box>
       <ol>
       <Button id="outlined-basic" label="Outlined" variant="outlined" type="submit" >
       Revers firstnames
       </Button>
       <ol>
         {this.state.jsonWithFirstname.map(names => (
                        <li>{names}</li>
          ))}
          </ol>
       </ol>
       </Box>
       </form>
     );
   }
 }

export default UsersWithReversedNames;