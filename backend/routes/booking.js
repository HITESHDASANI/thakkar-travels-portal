const express = require("express")
const router = express.Router()
const Booking = require("../models/Booking")

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const pnr = Math.random().toString(36).substring(2, 8).toUpperCase()

    const booking = new Booking({
      ...req.body,
      pnr
    })

    await booking.save()
    res.json(booking)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET ALL BOOKINGS
router.get("/", async (req, res) => {
  try {
    const data = await Booking.find().sort({ createdAt: -1 })
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router