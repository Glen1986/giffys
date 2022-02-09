import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export function useGifs ({ keyword } = {keyword: null}){
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    setLoading(true)
//recuperamos keyword desde localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    getGifs({keyword: keywordToUse})
    .then(gifs =>{
    setGifs(gifs)
setLoading(false)
//guardamos keyword en localStorage
    localStorage.setItem('lastKeyword', keyword)
})
}, [keyword])
 return {loading, gifs}
}
