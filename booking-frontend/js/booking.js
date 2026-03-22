async function loadFlights(){

const res = await fetch("https://thakkar-travels-portal.onrender.com/api/flights/search")

const data = await res.json()

let html=""

data.forEach(f=>{

html+=`
<tr>
<td>${f.airline}</td>
<td>${f.from}</td>
<td>${f.to}</td>
<td>${f.price}</td>
</tr>
`

})

document.getElementById("flights").innerHTML=html

}

loadFlights()