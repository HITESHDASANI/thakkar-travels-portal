async function loadFlights() {

  const from = localStorage.getItem("from")
  const to = localStorage.getItem("to")
  const date = localStorage.getItem("date")

  const res = await fetch(`${API}/api/flights/search?from=${from}&to=${to}&date=${date}`)
  const text = await res.text()

let data

try {
  data = JSON.parse(text)
} catch (e) {
  console.error("API ERROR RESPONSE:", text)

  document.getElementById("results").innerHTML =
    "<h3>Server Error: Check Backend</h3>"

  return
}
  const container = document.getElementById("results")
  container.innerHTML = ""

  const flights = data.result || []

  flights.forEach(f => {

    container.innerHTML += `
    <div class="card">
      <div>
        <h3>${f.airline || "Flight"}</h3>
        <p>${from} → ${to}</p>
        <p>${f.departureTime || "10:00 AM"} - ${f.arrivalTime || "12:00 PM"}</p>
      </div>

      <div>
        <div class="price">₹${f.price || "4500"}</div>
        <button onclick='bookFlight(${JSON.stringify(f)})'>Book</button>
      </div>
    </div>
    `
  })

}

function bookFlight(flight) {
  localStorage.setItem("selectedFlight", JSON.stringify(flight))
  window.location.href = "booking.html"
}

loadFlights()