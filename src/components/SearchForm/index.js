import React, {useState, } from 'react'

function SearchForm ({onSubmit}) {

const [keyword, setKeyword] = useState('')
const handleSubmit = (evt) => {
   evt.preventDefault()
   onSubmit({keyword})
  //  pushLocation(`/search/${keyword}`)
}


const handleChange = (evt) => {
  setKeyword(evt.target.value)
}
  return(
    <>
       <form onSubmit={handleSubmit}>
	  <input type="text" value={keyword} onChange={handleChange} placeholder="buscar Gifs"/>
	  <input onSubmit={handleSubmit} type="submit" value="search"/>
       </form>
    </>
  )
}
export default React.memo(SearchForm)
