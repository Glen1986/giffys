import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm'
import { useCallback } from 'react'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import useTitle from 'hooks/useTitle'


export default function Home () {
const [path, pushLocation] = useLocation()
const {loading, gifs} = useGifs()
const title= 'ultima Busqueda'


const handleSubmit = useCallback(({keyword}) => {
	pushLocation(`/search/${keyword}`)
	console.log(keyword)
},[pushLocation])
useTitle({title})

return(
	<>
	  <div className='App'>
	    <h3 className='App-title'>Gifs mas populares</h3>
	    <SearchForm onSubmit = { handleSubmit }/>
	    <title>ulima Busqeda</title>
	    <div className='Application'>
	      <ListOfGifs gifs={gifs}/>
	      <div className='TrendinSearches'>
		<TrendingSearches/>
	     </div>
	    </div>
	  </div>
	</>
    )
}
