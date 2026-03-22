const PDFDocument = require("pdfkit")

function generateTicket(booking, res) {

  const doc = new PDFDocument()

  res.setHeader("Content-Type", "application/pdf")
  doc.pipe(res)

  doc.fontSize(20).text("✈️ Thakkar Travels Ticket")
  doc.text("PNR: " + booking.pnr)
  doc.text("Name: " + booking.name)
  doc.text("Email: " + booking.email)

  doc.end()
}

module.exports = generateTicket