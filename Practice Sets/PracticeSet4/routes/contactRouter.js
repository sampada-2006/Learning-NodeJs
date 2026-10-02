const express=require('express');
const path=require('path');
const rootDir=require('../utils/pathutil');

const contactRouter=express.Router();

contactRouter.get("/contact-us",(req,res,next)=>{
  console.log("Getting form details",req.url, req.method);
  res.sendFile(path.join(rootDir,'views','form.html'));
});
contactRouter.post("/contact-us",(req,res,next)=>{
  console.log("Data posted succesfully",req.url, req.method,req.body);
  res.sendFile(path.join(rootDir,"views","response.html"));
});

module.exports=contactRouter;