import { API_URL, API_KEY } from './settings'

const fromApiResponseToGifs = (apiResponse) => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map((image) => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
}
export default function getGifs({
    limit = 12,
    keyword = 'weed',
    page = 0,
    rating = 'g',
} = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
        page * limit
    }&rating=${rating}&lang=en`
    return fetch(apiURL)
        .then((res) => res.json())
        .then(fromApiResponseToGifs)
}
/*
export default function getGifs({limit = 5, keyword = 'weed'} = {}){
 const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&${limit}&offset=0&rating=g&lang=en`
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
*/
