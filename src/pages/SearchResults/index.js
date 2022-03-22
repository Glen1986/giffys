import React, {useRef, useCallback, useEffect} from 'react'
import ListOfGifs from 'components/ListOfGifs'
import Spiner from 'components/Spiner'
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import useTitle from 'hooks/useTitle'

export default function SearchResults({params}){
const { keyword } = params
const {loading, gifs, setPage} = useGifs({keyword})
const externalRef = useRef()
const {isNearScreen } = useNearScreen({
   externalRef: loading 
              ? null 
              : externalRef, 
          once: false})
const title = decodeURI(keyword)
useTitle({title})
console.log(title)
//const handleNextPage = () => setPage(prevPage => prevPage + 1)
//const handleNextPage = () => console.log('nextPage')

const debounceHandleNextPage = useCallback(debounce(
   ()=> setPage(prevPage => prevPage + 1), 200
  ),[setPage])

useEffect(()=>{
console.log(isNearScreen)
if(isNearScreen) debounceHandleNextPage()
}, [debounceHandleNextPage, isNearScreen])

return<>
      {loading
       ? <Spiner/>
       :<> 
          <h3 className="App-title"> {decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs}/>
       </>
      }
    <div ref = {externalRef}></div>
   </>
 }
