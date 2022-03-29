import {  useContext, useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({ keyword, rating} = {keyword: null}){
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
//  const [gifs, setGifs] = useState([])
  const {gifs, setGifs} = useContext(GifsContext)
  
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
  useEffect(() => {
    setLoading(true)
//recuperamos keyword desde localStorage
    getGifs({keyword: keywordToUse, rating})
    .then(gifs =>{
    setGifs(gifs)
setLoading(false)
//guardamos keyword en localStorage
    localStorage.setItem('lastKeyword', keyword, rating)
})
}, [keyword, setGifs, keywordToUse])

useEffect(() => {
   if(page === INITIAL_PAGE) return 
   getGifs({keyword: keywordToUse, page, rating})
   .then(nextGifs =>{
   setGifs(prevGifs => prevGifs.concat(nextGifs))
  })
 },[page, keywordToUse, setGifs, rating])
 return {loading, gifs, setPage}
}
