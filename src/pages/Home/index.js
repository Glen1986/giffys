import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useState } from 'react'
import { useGifs } from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches'


export default function Home () {
const [keyword, setKeyword] = useState('')
const [path, pushLocation] = useLocation()
const {loading, gifs} = useGifs()


const handleSubmit = (evt) => {
	evt.preventDefault()
	pushLocation(`/search/${keyword}`)
	console.log(keyword)
}
const handleChange = (evt) => {
  setKeyword(evt.target.value)
}
return(
		<>
			<h3 className='App-title'>Gifs mas poplares</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" value={keyword} onChange={handleChange} placeholder="buscar Gifs"/>
				<input onSubmit={handleSubmit} type="submit" value="search"/>
			</form>
				<h3>ulima Busqeda</h3>
			<ListOfGifs gifs={gifs}/>
			<TrendingSearches/>
		</>
	)
}
