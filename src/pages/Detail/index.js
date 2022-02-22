import React, {useContext, useEffect} from "react"
//import GifsContext from "../../context/GifsContext"
import Gif from "../../components/Gif"
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail({params}){
//const {gifs} = useContext(GifsContext)
const gifs = useGlobalGifs()

const gif = gifs.find(singleGif => singleGif.id === params.id)
//useEffect(()=>{
//const gifToUse = gif || localStorage.getItem('myGif')
//console.log(gifToUse)
//},[gif])
return <Gif {...gif}/>
}
