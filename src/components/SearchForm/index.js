import React, { useState, useReducer } from 'react'
import { useLocation } from 'wouter'
import './style.css'
const RATINGS = ['g', 'pg', 'pg-13', 'r' ]

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
switch (action.type){
case ACTIONS.UPDATE_KEYWORD:
    return {
      ...state,
      keyword:action.payload, 
      times: state.times + 1
}
case ACTIONS.UPDATE_RATING:
  return{
    ...state,
    rating: action.payload
    }
  default:
return state
}
}

function SearchForm ({initialRating = 'g', initialKeyword = ''}) {

//const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
//const [rating, setRating] = useState(initialRating)
//const [times, setTimes] = useState(0)

const [state, dispatch] = useReducer(reducer, {
   keyword:decodeURIComponent(initialKeyword),
   rating: initialRating,
   times: 0
})
const { keyword, times, rating } = state

const [_, pushLocation] =  useLocation()

//const updateKeyword = keyword =>{
//   dispatch(keyword)
//   setKeyword(keyword)
//   setTimes(times + 1)
//}
const handleChange = (evt) => {
 dispatch({type:ACTIONS.UPDATE_KEYWORD, payload: evt.target.value})
}
const handleSubmit = (evt) => {
//   onSubmit({keyword})
//  setTimes(times + 1)
  evt.preventDefault()
  pushLocation(`/search/${keyword}/${rating}?`)
}

const handleChangeRating = evt => {
   dispatch({type: ACTIONS.UPDATE_RATING, payload: evt.target.value})
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
