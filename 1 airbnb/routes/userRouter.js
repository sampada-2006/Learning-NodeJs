//core modules
const path=require('path');

//external modules
const express=require('express');
const userRouter= express.Router();

//local module
const rootDir=require("../utils/pathUtil");

userRouter.get("/",(req,res,next)=>{
  
  res.sendFile(path.join(rootDir,'views','home.html')); //option for admin to add home list
})

module.exports=userRouter;