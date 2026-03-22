async function loadDashboard(){

const flights = await fetch("https://thakkar-travels-portal.onrender.com/api/flights/search")
const flightData = await flights.json()

document.getElementById("flights").innerText = flightData.length

}

loadDashboard()