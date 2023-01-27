import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './NavBar.css' 

import Img from './img/noonlogo.jpg'
import { ForkLeft } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
export default function DenseAppBar() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 ,
     }}>
      <AppBar position="static"  style={{backgroundColor:"rgb(255, 233, 32)",}}>
        <Toolbar variant="dense">
<img src={Img} alt="j" width={130}/>
          {/* <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography> */}

          <div>
          <FormControl  style={{border:"none"}} sx={{ m: 1, minWidth: 120 ,
          }}>
        <Select style={{border:"none"}}
        border='none'
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" style={{border:"none"}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

      </FormControl>
        <input type="text" placeholder='What are you lookong for?' name="" value="" size={100} style={{height:40}} />
          </div>
          <div style={{color:"black ",}} className="top">ENGLISH</div>
          <div style={{color:"black",}} >Sign In</div>
          <div style={{color:"black"}}>Cart</div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
