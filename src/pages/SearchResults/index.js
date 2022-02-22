
import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs';
import Spiner from '../../components/Spiner'

export default function SearchResults({params}){
const { keyword } = params

const {loading, gifs} = useGifs({keyword})

return<>
      {loading
       ? <Spiner/>
       :<> 
          <h3 className="App-title"> {decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs}/>
       </>
      }
   </>
 }
