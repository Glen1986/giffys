import React from 'react'
import { useLocation } from 'wouter'
import  useForm from './hooks'
import './style.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r' ]

function SearchForm ({initialRating = 'g', initialKeyword = ''}) {

const { keyword, times, rating, updateKeyword, updateRating } = useForm({
initialKeyword,
initialRating
}) 

const [_, pushLocation] =  useLocation()

const handleChange = (evt) => {
 updateKeyword(evt.target.value)
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  pushLocation(`/search/${keyword}/${rating}?`)
}

const handleChangeRating = evt => {
   updateRating(evt.target.value)
   setTimes(times + 1)
}
  return(
    <>
       <form onSubmit={handleSubmit}>
         <input onSubmit={handleSubmit} 
                type="submit" value="search"/>
         <input type="text" value={keyword}
                onChange={handleChange} 
                placeholder="buscar Gifs"/>
         <select onChange = {handleChangeRating} value = {rating}>
           <option disabled>Rating Type</option>
           {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
         </select>
         <small>{times}</small>
         
       </form>
    </>
  )
}
export default React.memo(SearchForm)
