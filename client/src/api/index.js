import axios from 'axios'

let url = 'http://localhost:8080'

export default axios.create({
  baseURL: `${url}`,
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
