const express=require('express');
const path=require('path');
const rootDir=require('../utils/pathutil');

const homeRouter=express.Router();

homeRouter.get("/",(req,res,next)=>{
  console.log("handelling get on /",req.url, req.method);
  res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports=homeRouter;