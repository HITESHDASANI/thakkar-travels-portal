const express = require("express")
const cors = require("cors")

// Route files
const flights = require("./routes/flights")
const booking = require("./routes/booking")
const payment = require("./routes/payment")

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// API Routes
app.use("/api/flights", flights)
app.use("/api/bookings", booking)
app.use("/api/payment", payment)

// Test Route
app.get("/", (req, res) => {
  res.send("Thakkar Travels API Running Successfully")
})

// Server Port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})