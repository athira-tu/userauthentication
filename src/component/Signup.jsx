import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup(props) {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    // const [email, setemail] = useState("")
    // const [name, setname] = useState("")
    // const [password, setpassword] = useState("")
    // const [signup, setsignup] = useState("")
    const navigate = useNavigate()

    function showdata() {
        // setsignup(true)

        let obj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        console.log(obj);

        navigate('/login')
    }

    return (
        <div>
            <input type="text" placeholder='username' ref={nameRef} /><br />
            <input type="email" placeholder='email' ref={emailRef} /><br />
            <input type="password" placeholder='password' ref={passwordRef} />
            <button onClick={showdata}>Signup</button>
        </div>
    )
}

export default Signup