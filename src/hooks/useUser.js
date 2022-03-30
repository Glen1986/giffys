import { useCallback, useContext } from 'react'
import Context from 'context/UserConext'

export default function useUser () {
  const {jwt, setJWT} = useContext(Context)

  const login = useCallback(() => {
    setJWT('test')
  },[setJWT])

return{
  isLogged: Boolean(jwt),
  login
  }
}
