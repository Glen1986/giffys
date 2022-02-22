
import { API_URL, API_KEY} from '../services/settings'

const fromApiResponseToGifs = apiResponse => {
const {data = []} = apiResponse
return data
}

export default function getTrendigTerms({keyword, limit}){

const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=G&lang=en`
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
/* .then(res => {
      const {data = []} = res
      if(Array.isArray(data)){ 
      const gifs = data.map(image =>{
      const {images, title, id} = image
      const {url} = images.downsized_medium
      return{ title, id, url }
    })
return gifs
     } 
})*/
}

