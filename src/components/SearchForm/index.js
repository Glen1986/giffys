import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
         <Select
                className='select'
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
            onChange = {handleChangeRating} value = {rating}>
           <MenuItem disabled>Rating Type</MenuItem>
           {RATINGS.map(rating => (<MenuItem value={rating} key={rating}>{rating}</MenuItem>))}
         </Select>
         <small>{times}</small>
         
       </form>
    </>
  )
}
export default React.memo(SearchForm)
