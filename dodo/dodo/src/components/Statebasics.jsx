import {Button,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  // var[name,fname]=useState("hudha")

  var[val,setval]=useState()
  var[sub,setsub]=useState()

  const handleInput=(e)=>{
    setval(e.target.value);
    console.log(val);
  }
    const submithandler=()=>{
      console.log("clicked")
      setsub(val)


  }
  return (
    <div style={{margin:'100px'}}>
      <br /><br /><br /><br /><br />
     <Typography variant='h6'>Welcome to {sub}</Typography>
     <br />
     <TextField variant="outlined" onChange={handleInput}/>
     <button variant='outlined' onClick={submithandler}>submit</button>
    </div>
  )
}


export default Statebasics
