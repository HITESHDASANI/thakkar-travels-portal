document.getElementById("ticket").innerHTML=

`
Passenger : ${localStorage.getItem("name")}
<br>
Flight : ${localStorage.getItem("airline")}
<br>
Price : ₹${localStorage.getItem("price")}
<br>
Status : Confirmed
`