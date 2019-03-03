import API from './Api.js'

const fetchCities = (e) => {
  let cityArray = [];
  API.get('locations/cities')
    .then(res => {
      cityArray = res.data.cities
      console.log('BOOO', cityArray)
      return cityArray
    })
    .catch(err => {
      console.log(err)
    })
}

export default fetchCities
