const express=require("express")
const router=express.Router()

let bookings=[]

router.post("/create",(req,res)=>{

const booking=req.body

bookings.push(booking)

res.json({
status:"success",
message:"Booking created",
booking
})

})

router.get("/all",(req,res)=>{

res.json(bookings)

})

module.exports=router