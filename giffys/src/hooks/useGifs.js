import {  useContext, useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({ keyword } = {keyword: null}){
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
//  const [gifs, setGifs] = useState([])
  const {gifs, setGifs} = useContext(GifsContext)
  
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
  useEffect(() => {
    setLoading(true)
//recuperamos keyword desde localStorage
    getGifs({keyword: keywordToUse})
    .then(gifs =>{
    setGifs(gifs)
setLoading(false)
//guardamos keyword en localStorage
    localStorage.setItem('lastKeyword', keyword)
})
}, [keyword, setGifs, keywordToUse])

useEffect(() => {
   if(page === INITIAL_PAGE) return 
   getGifs({keyword: keywordToUse, page})
   .then(nextGifs =>{
   setGifs(prevGifs => prevGifs.concat(nextGifs))
  })
 },[page, keywordToUse, setGifs ])
 return {loading, gifs, setPage}
}
