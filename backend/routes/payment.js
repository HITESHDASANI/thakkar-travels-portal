const express=require("express")
const router=express.Router()

router.post("/create",(req,res)=>{

const amount=req.body.amount

res.json({
status:"success",
paymentUrl:"https://phonepe.com/pay",
amount
})

})

module.exports=router