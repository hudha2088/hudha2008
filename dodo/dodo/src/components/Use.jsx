import {Button,Typography} from  'react'
import React, {useEffect,useState} from 'react'

const Use = () => {
 var[x,setx]=useState()
 const react=()=>{
     setx("React")
 }
 const ang=()=>{  
    setx("angular")
 }
 const node=()=>{
    setx("node")
 }
 useEffect(()=>{
    react();
 },[])
 return (
    <div>
        <br /><br /><br /><br /><br /><br />
        <Typography variant='h6'>welcome to {x}</Typography><br/>
        <Button variant='contained' color="success" onClick={react}>React</Button>
        &nbsp;  &nbsp;  &nbsp;
        <Button variant='contained' color='error' onClick={ang}>Angular</Button>
        &nbsp;  &nbsp;  &nbsp;
        <Button variant='contained' color="success" onClick={node}>node</Button>
    </div>
  )
}

export default Use






