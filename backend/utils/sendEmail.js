const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

async function sendEmail(to, booking) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Flight Ticket - Thakkar Travels",
    text: `PNR: ${booking.pnr}`
  })
}

module.exports = sendEmail