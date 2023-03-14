import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup(props) {
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [signup, setsignup] = useState("")
    const navigate = useNavigate()

    function showdata() {
        setsignup(true)

        let obj = {
            email, name, password
        }
        props.setuser(obj)

        navigate('/login')
    }

    return (
        <div>
            <input type="text" placeholder='username' onChange={(e) => { setemail(e.target.value) }} /><br />
            <input type="email" placeholder='email' onChange={(n) => { setname(n.target.ariaValueMax) }} /><br />
            <input type="password" placeholder='password' onChange={(p) => { setpassword(p.target.value) }} />
            <button onClick={showdata}>Signup</button>
        </div>
    )
}

export default Signup