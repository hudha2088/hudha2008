import {Button,TextField} from '@mui/material';
import React from 'react'

const Register = () => {
  return (
    <div>
<br /><br /><br /><br />
        <TextField label="username" variant="outlined" /><br /><br />
        <TextField label="password" variant="outlined" /><br /><br />
        <TextField label="email" variant="outlined" /><br /><br />
        <Button variant="contained">signup</Button>
    </div>
  )
}

export default Register