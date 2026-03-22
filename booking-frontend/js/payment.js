async function pay(){

const res = await fetch("https://thakkar-travels-portal.onrender.com/api/payment/phonepe",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
amount:4500
})

})

const data = await res.json()

alert("Payment Success "+data.transactionId)

}