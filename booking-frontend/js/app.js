async function searchFlights(){

const from=document.getElementById("from").value
const to=document.getElementById("to").value
const date=document.getElementById("date").value

const res=await fetch("https://api.thakkartravels.com/api/flights/search",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({from,to,date})

})

const flights=await res.json()

let html=""

flights.forEach(f=>{

html+=`
<div>
<h3>${f.airline}</h3>
<p>${f.from} → ${f.to}</p>
<p>₹${f.price}</p>
<button>Book</button>
</div>
`

})

document.getElementById("results").innerHTML=html

}