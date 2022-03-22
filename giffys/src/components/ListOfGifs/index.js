import React from 'react'
import Gif from '../Gif/index'
import Spiner from '../Spiner'
import './styles.css'

export default function ListOfGifs({gifs, loading}){
return <div className='ListOfGifs'>
  {loading
  ? <Spiner/>
  : gifs.map(({title, id, url}) =>
        <Gif 
          title={title}
          id={id} 
          url={url}
          key={id}
        />
     )
   }
 </div>
 }
