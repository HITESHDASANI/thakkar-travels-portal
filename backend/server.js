const express = require("express")
const cors = require("cors")

const flights = require("./routes/flights")
const booking = require("./routes/booking")
const payment = require("./routes/payment")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/flights",flights)
app.use("/api/bookings",booking)
app.use("/api/payment",payment)

app.get("/",(req,res)=>{
res.send("Thakkar Travels API Running")
})

const PORT = 3000

app.listen(PORT,()=>{
console.log("Server running on port",PORT)
})