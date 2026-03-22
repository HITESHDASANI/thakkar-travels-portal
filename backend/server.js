require("dotenv").config()   // सबसे ऊपर

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())

// ✅ Mongo connect पहले
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("Mongo Error ❌", err))

// Routes
app.use("/api/flights", require("./routes/flights"))
app.use("/api/bookings", require("./routes/booking"))
app.use("/api/payment", require("./routes/payment"))
app.use("/api/admin", require("./routes/admin"))

app.get("/", (req, res) => {
  res.send("Thakkar Travels API Running ✈️")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
require("./cron/checkin")
