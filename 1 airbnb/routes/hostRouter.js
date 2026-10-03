//core module
const path=require('path');

//external module
const express = require("express");
const hostRouter=express.Router();

//local module
const rootDir=require('../utils/pathUtil');

hostRouter.get("/add-home",(req,res,next)=>{
res.render('addHome',{pageTitle:"Register your home"});
})

const registerdHomes=[];
hostRouter.post("/add-home",(req,res,next)=>{
  registerdHomes.push({houseName:req.body.houseName});
res.render('homeAdded',{pageTitle:'Home added successfully'});
})

exports.hostRouter=hostRouter;
exports.registerdHomes=registerdHomes;
                