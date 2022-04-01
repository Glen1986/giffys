import {useCallback, useContext} from 'react'
import Context from 'context/UserContext'

export default function useUser () {
const {jwt, setJWT} = useContext(Context)

const login = useCallback(() => {
    setJWT(jwt)
    console.log('click')
  })
return {
  isLogged: Boolean(jwt),
  login
  }
}
