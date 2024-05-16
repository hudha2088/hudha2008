import{Button,Typography} from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setcount]=useState(0)
        const add=()=>{
            setcount(count+1)
        }
        const sub=()=>{
            setcount(count-1)
        
        }
    
    return (
    <div>
        <br /><br /><br /><br />&nbsp;&nbsp; &nbsp;
        <Typography variant='h3'>Count:{count}</Typography>"
        <Button variant="contained" color="success" onclick={add}>+</Button>
        &nbsp;&nbsp;
        <Button variant="contained" color='error'onclick={sub}>-</Button>&nbsp;&nbsp;
        <Typography variant='h6'>Count:{count}</Typography><br/>
        
        
        </div>
  )
}

export default Counter