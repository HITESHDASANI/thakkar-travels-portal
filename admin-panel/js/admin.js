async function loadBookings(){

const res=await fetch("https://api.thakkartravels.com/api/bookings/all")

const data=await res.json()

document.getElementById("list").innerHTML=JSON.stringify(data)

}