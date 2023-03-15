import React from 'react'
import { useState, useRef } from 'react'
// import App from '../App'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
function Login(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState("")

    function showdata() {
        if (emailRef.current.value == props.user.email && passwordRef.current.value == props.user.password) {
            alert("login succesfull")
        } else {
            alert("failed")
        }
    }

    return (
        <Box>
            <input type="email" placeholder='email' ref={emailRef} style={{ color: "red", backgroundColor: "blue" }} /><br />
            <input type="password" placeholder='password' ref={passwordRef} />
            <button onClick={showdata}>login</button>

            <input type="text" placeholder='name' />
            <button varient="contained">test</button>
        </Box>
    )
}

export default Login