import React from 'react'

const Login = () => {
  return (
    <div> 
        <h1>Login</h1>
        <form action=""></form>
        Name:<input type="text"name=""id=""/><br/>
        email <input type="email" name="" id="" /><br />
        password: <input type="password" name="" id=""/><br />
        gender:male:<input type="radio" value="gender" />
        female: <input type="radio" value="gender" />
        other: <input type="radio" value="gender" /><br />
        age: <input type="number" name="" id="" /><br />
        <input type="button" value="submit" />
    </div>
  )
}

export default Login