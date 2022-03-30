import React, {useState, useEffect} from 'react'
import {useLocation} from 'wouter'
import useUser from 'hooks/useUser'
import './styles.css'
 
export default function Login () {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const[, pushLocation] = useLocation()
const { login, isLogged } = useUser()

useEffect(() =>{
  if(isLogged) pushLocation('/')
},[isLogged, pushLocation])

const handleSubmit = (e) =>{
  e.preventDefault()
  login()
}
return(
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
)
}
