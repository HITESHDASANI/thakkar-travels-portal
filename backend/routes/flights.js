const express = require("express")
const router = express.Router()
const { searchFlights } = require("../services/ease2fly")

router.get("/search", async (req, res) => {
  try {
    const { from, to, date } = req.query

    const data = await searchFlights({ from, to, date })

    res.json(data)

  } catch (err) {
    console.log("SEARCH ERROR:", err.response?.data || err.message)
    res.status(500).json(err.response?.data || err.message)
  }
})

module.exports = router