const express=require("express")
const router=express.Router()

router.post("/search",(req,res)=>{

const {from,to,date}=req.body

const flights=[
{
airline:"IndiGo",
flight:"6E101",
from,
to,
date,
price:5200
},
{
airline:"Air India",
flight:"AI203",
from,
to,
date,
price:6100
}
]

res.json(flights)

})

module.exports=router