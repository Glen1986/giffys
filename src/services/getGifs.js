//import {API_URL} from './services/settings
 const API_KEY = 'I7JN0m5BiCRj6qEzcP8dQMRi3V8GN2Sy'

export default function getGifs({keyword = 'weed'} = {}){
 const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  return  fetch(API_URL)
    .then(res => res.json())
    .then(res => {
      const {data = []} = res
      if(Array.isArray(data)){ 
      const gifs = data.map(image =>{
      const {images, title, id} = image
      const {url} = images.downsized_medium
      return{ title, id, url }
    })
return gifs
     } 
   })
}

