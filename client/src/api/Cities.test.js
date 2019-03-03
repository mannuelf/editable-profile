import axios from 'axios'
import Cities from './Cities'

jest.mock('axios')

test('should fetch cities', () => {
  const CITIES = [
    {
      "lat": "56°09'N",
      "lon": "10°13'E",
      "city": "Aarhus"
    },
    {
      "lat": "57°09'N",
      "lon": "2°07'W",
      "city": "Aberdeen"
    },
    {
      "lat": "5°19'N",
      "lon": "4°02'W",
      "city": "Abidjan"
    }]

  const RESP = { data: CITIES }

  axios.get.mockResolvedValue(RESP)

  return Cities.get(RESP => {
    expect(RESP.data).toEqual(CITIES)
  })
})
