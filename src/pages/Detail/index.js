import React, {useContext, useEffect} from "react"
import GifsContext from "../../context/GifsContext"
import Gif from "../../components/Gif"

export default function Detail({params}){
const {gifs} = useContext(GifsContext)

const gif = gifs.find(singleGif => singleGif.id === params.id)
localStorage.setItem('myGif', gif)
//useEffect(()=>{
//const gifToUse = gif || localStorage.getItem('myGif')
//console.log(gifToUse)
//},[gif])
return <Gif {...gif}/>
}
