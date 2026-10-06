//core module
const path=require('path');

//external module
const express = require("express");
const hostRouter=express.Router();

//local module
const rootDir=require('../utils/pathUtil');

hostRouter.get("/add-home",(req,res,next)=>{
res.render('addHome',{pageTitle:"Register your home",currentPage:"addHome"});
})

const registerdHomes=[];
hostRouter.post("/add-home",(req,res,next)=>{
  registerdHomes.push({House:req.body});
res.render('homeAdded',{pageTitle:'Home added successfully',currentPage:"homeAdded"});
})

exports.hostRouter=hostRouter;
exports.registerdHomes=registerdHomes;
                