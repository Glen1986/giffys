<<<<<<< HEAD
import { useCallback, useContext, useState } from "react";
import Context from 'context/UserContext'
import loginService from 'services/login'
import addFavServices from 'services/addFav'

export default function useUser(){
  const {favs, jwt, setFavs, setJWT} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({username, password}) => {
    setState({loading: true, error: false })
    loginService({username, password})
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt)
        setState({loading: false, error: false })
        setJWT(jwt)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setJWT])

const addFav = useCallback(({id}) => {
  addFavServices({id, jwt})
  .then(setFavs)
  .cacth( err => {
  console.log(err)
    })
  }, [jwt, setFavs])

const logout = useCallback(() => {
  window.sessionStorage.removeItem('jwt')
  setJWT(null)
}, [setJWT])

  return {
    addFav,
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
=======
import { useCallback, useContext } from 'react'
import Context from 'context/UserConext'

export default function useUser () {
  const {jwt, setJWT} = useContext(Context)

  const login = useCallback(() => {
    setJWT('test')
  },[setJWT])

const logout = useCallback(() =>{
  setJWT(null)
}, [setJWT])

return{
  isLogged: Boolean(jwt),
  login,
  logout
>>>>>>> main
  }
}
