import { API_URL, API_KEY } from '../services/settings'

const fromApiResponseToGifs = apiResponse => {
const {data = []} = apiResponse
return data
}

export default function getTrendigTerms () {
const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)

}

