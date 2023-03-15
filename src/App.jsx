import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/Signup'


function App() {
  const [user, setuser] = useState({})


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login user={user} />} />
          <Route path='/signup' element={<Signup setuser={setuser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



