import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useState } from 'react';

import MainComp from './MainComp';

import './App.css';

function App() {

  const [button, setButton] = useState(false)

  const handlebutton=()=>{
    setButton(true)
  }
  return (
    <div className='main_button'>
       <Box sx={{ '& button': { m: 1 } }}>
           <Button variant="contained" size="large" onClick={handlebutton} >
          Click
        </Button>
        {button? <MainComp setButton={setButton}/>:""}
        </Box>
    </div>
  );
}

export default App;
