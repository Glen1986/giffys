import Spiner from 'components/Spiner'
//import useSEO from "hooks/useSEO"
import { Redirect } from 'wouter'
import Gif from '../../components/Gif'
import useSingleGif from '../../hooks/useSingleGif'
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    const title = gif ? gif.title : ''

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando</title>
                </Helmet>
                <Spiner />
            </>
        )
    }
    if (isError) return <Redirect to="/404" />
    if (!gif) return null

    return (
        <>
            <Helmet>
                <title>{title} || Giffy</title>
            </Helmet>
            <h3 className="App-title">{gif.title}</h3>
            <Gif {...gif} />
        </>
    )
}
