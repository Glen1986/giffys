import React, {useRef, useCallback, useEffect} from 'react'
import ListOfGifs from 'components/ListOfGifs'
import Spiner from 'components/Spiner'
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import useSEO from 'hooks/useSEO'
import SearchForm from 'components/SearchForm'; 
import {Helmet} from 'react-helmet'

export default function SearchResults({params}){
const { keyword } = params
const {loading, gifs, setPage} = useGifs({keyword})
const externalRef = useRef()
const {isNearScreen } = useNearScreen({
   externalRef: loading 
              ? null 
              : externalRef, 
          once: false})
//const title = decodeURI(keyword)
const title = gifs ? `${gifs.length} resulrtados de ${decodeURI(keyword)}`: ''
useSEO({description: decodeURI(keyword), title})
console.log(title)
//const handleNextPage = () => setPage(prevPage => prevPage + 1)
//const handleNextPage = () => console.log('nextPage')
//          <header>
//            <SearchForm onSubmit = {handleSubmitSearchForm}/>
//         </header>
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
           <Helmet>
             <title>{title}</title>
          </Helmet>
          <h3 className="App-title"> {decodeURI(keyword)}</h3>

          <ListOfGifs gifs={gifs}/>
       </>
      }
    <div ref = {externalRef}></div>
   </>
 }
