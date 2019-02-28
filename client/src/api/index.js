import axios from 'axios'

let url = 'http://localhost:9000'

export default axios.create({
  baseURL: `${url}`,
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  credentials: 'same-origin',
})
