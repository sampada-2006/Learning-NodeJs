//core modules
const path=require('path');

//external modules
const express=require('express');
const userRouter= express.Router();

userRouter.get("/",(req,res,next)=>{
  
  res.sendFile(path.join(__dirname,'../','views','home.html')); //option for admin to add home list
})

module.exports=userRouter;