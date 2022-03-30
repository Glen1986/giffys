import React from 'react'
import {Link} from 'wouter'

import useUser from 'hooks/useUser'

import './styles.css'
 import useUser from 'hooks/useUser'

export default function Header () {
<<<<<<< HEAD
const {isLogged, logout} = useUser()

const handleClick = e => {
  e.preventDefault()
  logout()
}
=======
//const isLogged = false
>>>>>>> main

const {isLogged, logout} = useUser()

const handleClick = e =>{
e.preventDefault()
logout()
}
return(
    <header className="gf-header">
      {isLogged 
<<<<<<< HEAD
       ? <Link to='#' onClick = { handleClick }>
=======
       ? <Link to='#' onClick={handleClick}>
>>>>>>> main
           Logout
         </Link>
       : <Link to='/login'>
          Login
         </Link>
      }
    </header>
  )
}
