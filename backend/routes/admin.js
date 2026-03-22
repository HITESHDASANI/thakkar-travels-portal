const router = require("express").Router()
const ExcelJS = require("exceljs")
const Booking = require("../models/Booking")

router.get("/export", async (req, res) => {

  const bookings = await Booking.find()

  const workbook = new ExcelJS.Workbook()
  const sheet = workbook.addWorksheet("Bookings")

  sheet.columns = [
    { header: "PNR", key: "pnr" },
    { header: "Name", key: "name" },
    { header: "Email", key: "email" }
  ]

  bookings.forEach(b => sheet.addRow(b))

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  )

  await workbook.xlsx.write(res)
  res.end()
})

module.exports = router