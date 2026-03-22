async function searchFlights(){

const from=document.getElementById("from").value
const to=document.getElementById("to").value

const res=await fetch("http://localhost:3000/api/flights/search?from="+from+"&to="+to)

const flights=await res.json()

let html=""

flights.forEach(f=>{

html+=`
<div class="flight-card">

<h3>${f.airline}</h3>

<p>${f.from} → ${f.to}</p>

<p>Price : ₹${f.price}</p>

<button onclick="bookFlight('${f.airline}','${f.from}','${f.to}',${f.price})">
Book Now
</button>

</div>
`

})

document.getElementById("results").innerHTML=html

}

async function bookFlight(airline,from,to,price){

const res=await fetch("http://localhost:3000/api/bookings/create",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:"Customer",
airline,
from,
to,
price

})

})

const data=await res.json()

alert("Booking Confirmed PNR : "+data.pnr)

}