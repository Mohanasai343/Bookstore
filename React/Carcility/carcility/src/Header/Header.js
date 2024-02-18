import React from 'react'
import "./header.css"
import {ImSearch} from 'react-icons/im'
import { Switch } from 'antd';
import { useState } from 'react';
import {HiOutlineInformationCircle} from 'react-icons/hi'
import {BsFillExclamationTriangleFill} from 'react-icons/bs'
import {AiFillBell} from 'react-icons/ai'
import {RiMessage2Fill} from 'react-icons/ri'
import {BiChevronDown} from 'react-icons/bi'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Header=()=>{

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  

    const [disabled, setDisabled] = useState(false);
    const onChange = () => {
      setDisabled(!disabled);
    };
        return(
        <div className='header'>
        <div>
         <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIKMrHVRcDQ75d4y6O_5uGEMpYu1yJG2iWyD682YXpLiKrVj8Efn4NnpNxQPwkqsOFXk&usqp=CAU' alt=''/>
        </div>  

        <div className='drop'>
            <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Open Jobs</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Waiting</MenuItem>
          <MenuItem value={20}>Applied</MenuItem>
          <MenuItem value={30}>Confirmed</MenuItem>
          <MenuItem value={30}>In Progress</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
     <input className='searchbar' type='text' placeholder='Search by Job ID, Customer Name…'/><ImSearch className='searchicon'/>
    <>
     <Switch className='switch' size="small" checked={disabled} onChange={onChange}/>
     <span className='button'>Auto Quote: {disabled?"ON":"OFF"}</span>
     <HiOutlineInformationCircle className='info'/>
    </>

    <div className='trail'>
        <span className='subTrail'>Trail Version</span>
    </div>

    <>
    <BsFillExclamationTriangleFill className='error'/>
    <AiFillBell className='bell'/>
    <RiMessage2Fill className='message'/>
    <BiChevronDown className='downarrow'/>
    </>
        </div>

    );
    }
export default Header