const express=require("express")
const fs=require("fs")

const router=express.Router()

router.post("/create",(req,res)=>{

const booking=req.body

let data=[]

if(fs.existsSync("./data/bookings.json")){
data=JSON.parse(fs.readFileSync("./data/bookings.json"))
}

data.push(booking)

fs.writeFileSync("./data/bookings.json",JSON.stringify(data,null,2))

res.json({status:"booking saved"})

})

module.exports=router