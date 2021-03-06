import React, {useState, useEffect} from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}){
//const [favs, setFavs] = useState([])
const [jwt, setJWT] = useState(
null
//  () => window.sessionStorage.getItem('jwt')
)

//useEffect(() => {
//  if( !jwt ) return setFavs([])
//  getFavs({jwt}).then(setFavs)
//}, [jwt])

return <Context.Provider value={{ 
         jwt,
				 setJWT,
//				 favs,
//				 setFavs,
				 }}>
				{children}
			</Context.Provider>
}
export default Context

