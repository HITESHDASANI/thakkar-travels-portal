const axios = require("axios")

const BASE_URL = process.env.EFLY_BASE_URL

const EMAIL = process.env.EFLY_USERNAME
const PASSWORD = process.env.EFLY_PASSWORD
// LOGIN
async function login() {
  const res = await axios.post(`${BASE_URL}/tp-api/login`, {
    email: EMAIL,
    pwd: PASSWORD,
    efly_api_key: "3216a7b1-26f9-4add-a8bf-b5abb2732a5d"
  })

  return res.data.token
}

// SEARCH
async function searchFlights({ from, to, date }) {

  const token = await login()

  const res = await axios.get(
    `${BASE_URL}/tp-api/v2/search-flights`,
    {
      params: {
        origin: from.toLowerCase(),
        destination: to.toLowerCase(),
        departuredate: date,
        adults: 1,
        trip_type: "ow"
      },
      headers: {
        Authorization: `Bearer ${token}`,
        efly_api_key: "YOUR_API_KEY"
      }
    }
  )

  return res.data.result || []
}

module.exports = { searchFlights }