const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  flight: Object,
  pnr: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Booking", bookingSchema)