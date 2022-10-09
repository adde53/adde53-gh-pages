import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@material-ui/core/Box'

function NthLargestNumber() {
  const [item, setItem] = useState({ cart: []});
  const [inputValue, setInputValue] = useState("");
  const [nthlargestnumber, setInputValue2] = useState('');
  const [posts, setPosts] = useState('');


  const saveInput = (e) => {
    setInputValue(e.target.value);
  };
  const saveInput2 = (e) => {
    setInputValue2(e.target.value);
  };

  const addNewItem = () => {
    if(inputValue!=""){
        setItem((existingCartList) => ({
          cart: [...existingCartList.cart, inputValue]
        }));
    }
    setInputValue("");
  };

  const handleSubmit = (event) => {

           var myHeaders = new Headers();
           myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
           var urlencoded = new URLSearchParams();
            for (let i = 0; i < item.cart.length; i++) {
                urlencoded.append("numbers", item.cart[i]);
            }
           urlencoded.append("nthlargestnumber", nthlargestnumber);

           var requestOptions = {
             method: 'POST',
             headers: myHeaders,
             body: urlencoded,
             redirect: 'follow'
           };
        console.log(item.cart)
        if(item.cart[0].length>0 && nthlargestnumber!=''){
           fetch("http://localhost:8088/api/methods/findnthlargestnumber", requestOptions)
             .then(response => response.text())
             .then((data) => {
                              console.log(data);
                              setPosts(data);
                           })
             .catch(error => console.log('error', error));

        }
        event.preventDefault();
  }

  return (
    <div>
    <ol>
     <label>
       Enter a new number:
     </label>
     <Box>
        <TextField type="number" id="standard-basic" label="Standard" variant="standard"  value={inputValue} onChange={saveInput}/>
        <Button id="outlined-basic" label="Outlined" variant="outlined" onClick={addNewItem}>Add number</Button>
     </Box>
     <label>
         Enter n:th number:
     </label>
     <Box>
        <TextField type="number" id="standard-basic" label="Standard" variant="standard"  value={nthlargestnumber} onChange={saveInput2}/>
        <Button id="outlined-basic" label="Outlined" variant="outlined" onClick={handleSubmit}>Find</Button>
      </Box>
      <ol>
        {item.cart.map((subItems, sIndex) => {
          return <li key={sIndex}> {subItems}</li>;
        })}
        </ol>

      <label>
        {posts!='' ? (
          <b>{posts} is the {nthlargestnumber}:th largest number </b>
        ) : (
          <b></b>
        )}
      </label>
    </ol>
    </div>
  );
}

export default NthLargestNumber;