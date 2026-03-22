function continuePayment(){

const name=document.getElementById("name").value

localStorage.setItem("name",name)

window.location="payment.html"

}