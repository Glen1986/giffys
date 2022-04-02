import ListOfGifs from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import { Helmet } from 'react-helmet'
import Spiner from 'components/Spiner'
//import useTitle from 'hooks/useTitle'

export default function Home() {
    const { loading, gifs } = useGifs()
    const title = 'ultima Busqueda'

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <div className="App">
                <h3 className="App-title">Gifs mas populares</h3>
                <SearchForm />
                <title>{title}</title>
                <div className="Application">
                    {loading ? <Spiner /> : <ListOfGifs gifs={gifs} />}
                    <div className="TrendinSearches">
                        <TrendingSearches />
                    </div>
                </div>
            </div>
        </>
    )
}
