import React from 'react'
import Gif from '../Gif/index'

export default function ListOfGifs({gifs}){
return <div className='ListOfGifs'>
  {
      gifs.map(({title, id, url}) =>
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
