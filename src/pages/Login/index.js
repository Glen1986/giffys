import React, {useState, useEffect} from 'react'
import {useLocation} from 'wouter'
import useUser from 'hooks/useUser'
<<<<<<< HEAD
=======
import './styles.css'
>>>>>>> main
 
export default function Login () {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const[, pushLocation] = useLocation()
<<<<<<< HEAD
const { isLoginLoading, hasLoginError, login, isLogged } = useUser()
useEffect(() => {
if(isLogged) pushLocation('/')
}, [isLogged, pushLocation])
=======
const { login, isLogged } = useUser()

useEffect(() =>{
  if(isLogged) pushLocation('/')
},[isLogged, pushLocation])
>>>>>>> main

const handleSubmit = (e) =>{
  e.preventDefault()
  login()
}
return(
<<<<<<< HEAD
  <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button>Login</button>
        </form>
        }
        {
        hasLoginError && <strong>invalid</strong>
        }
    </>
=======
<form onSubmit={handleSubmit}>
  <input 
    style={{backgroundColor:'white'}}
    className='userName'
    type="text" 
    placeholder="username" 
    onChange = {(e) => setUsername(e.target.value)} 
    value={username}
  />
  <input 
    type="password" 
    placeholder="password" 
    onChange = {(e) => setPassword(e.target.value)} 
    value={password}
  />
  <button>Login</button>
</form>
>>>>>>> main
)
}
