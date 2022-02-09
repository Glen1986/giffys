import React from "react";
import './styles.css'

export default function Gif ({title, id, url}){
   return(
     <a href={`#${id}`} className='gif'>
      <h4><small>{id}: </small>{title}</h4>
      <img src={url} alt={title}/>
     </a>
   )
}
