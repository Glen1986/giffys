
import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import getGifs from '../../services/getGifs'
import { useEffect, useState } from 'react';
import { useGifs } from '../../hooks/useGifs';

export default function SearchResults({params}){
//const [gifs, setGifs] = useState({loading: false, results:[]})
const { keyword } = params

const {loading, gifs} = useGifs({keyword})


/*
useEffect(() => {
  setGifs(actualGif =>({loading:true, results: actualGif.results})
  )
  getGifs({keyword})
  .then(gifs =>setGifs({loading:false, results: gifs}))
}, [keyword])
*/
if(loading) return <h1>Carando </h1>


return<>
   {
    <ListOfGifs gifs={gifs}/>
   }
   </>
 }
