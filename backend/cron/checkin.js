const cron = require("node-cron")
const Booking = require("../models/Booking")

cron.schedule("0 * * * *", async () => {

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const bookings = await Booking.find({
    travelDate: tomorrow.toISOString().split("T")[0]
  })

  bookings.forEach(b => {
    console.log("Auto check-in for:", b.pnr)
    // यहाँ airline API call कर सकते हो
  })

})