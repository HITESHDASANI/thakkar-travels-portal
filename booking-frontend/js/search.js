function searchFlights() {
  const from = document.getElementById("from").value
  const to = document.getElementById("to").value
  const date = document.getElementById("date").value

  if (!from || !to || !date) {
    alert("Fill all fields")
    return
  }

  localStorage.setItem("from", from)
  localStorage.setItem("to", to)
  localStorage.setItem("date", date)

  window.location.href = "results.html"
}