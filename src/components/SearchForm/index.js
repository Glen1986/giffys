import React, { useState, useReducer } from 'react'
import { useLocation } from 'wouter'
import './style.css'
const RATINGS = ['g', 'pg', 'pg-13', 'r' ]

const reducer = (state, param) => {
  return {
    ...state,
    keyword: param,
    times: state.times + 1
  }
}

function SearchForm ({initialRating = 'g', initialKeyword = ''}) {

//const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
const [rating, setRating] = useState(initialRating)
//const [times, setTimes] = useState(0)

const [state, dispatch] = useReducer(reducer, {
   keyword:decodeURIComponent(initialKeyword),
   times: 0
})
const { keyword, times } = state

const [_, pushLocation] =  useLocation()

const updateKeyword = keyword =>{
   dispatch(keyword)
//   setKeyword(keyword)
//   setTimes(times + 1)
}
const handleChange = (evt) => {
  updateKeyword(evt.target.value)
}
const handleSubmit = (evt) => {
//   onSubmit({keyword})
//  setTimes(times + 1)
  evt.preventDefault()
  pushLocation(`/search/${keyword}/${rating}?`)
}

const handleChangeRating = evt => {
   setRating(evt.target.value)
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
