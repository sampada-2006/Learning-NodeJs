//core modules
const path=require('path');

//external modules
const express=require('express');
const userRouter= express.Router();

//local module
const rootDir=require("../utils/pathUtil");
const {registerdHomes}=require('./hostRouter');

userRouter.get("/",(req,res,next)=>{
  console.log(registerdHomes);
  res.render('home',{registerdHomes:registerdHomes,pageTitle:"airbnb home"}); //option for admin to add home list
})

module.exports=userRouter;