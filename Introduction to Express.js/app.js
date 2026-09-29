
//external module
const express=require('express');

//local module
const requestHandler=require('./user');

const app=express();
app.use("/",(req,res,next)=>{
  console.log("In first middleware ",req.url,req.method);
  next();
});

app.post("/",(req,res,next)=>{
  console.log("In first middleware ",req.url,req.method);
  next();
});

app.get("/submit-details",(req,res,next)=>{
  console.log(req.url,req.method);
  res.send("<p>Submit details with get</p>");
})

app.post("/submit-details",(req,res,next)=>{
  console.log("In second middleware ",req.url,req.method);
  res.send("<p>Hi Sampada Here!!</p>");
});
const PORT=3000;
app.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
})