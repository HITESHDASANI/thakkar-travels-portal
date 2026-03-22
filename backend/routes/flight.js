const router = require("express").Router()
const { searchFlights } = require("../services/ease2fly")

router.get("/search", async (req, res) => {
  try {
    const data = await searchFlights(req.query)
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router