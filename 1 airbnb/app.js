//core module
const path=require('path');

//external module
const express=require('express');

//local module
const userRouter=require('./routes/userRouter'); //Local module
const hostRouter=require("./routes/hostRouter");
const rootDir=require("./utils/pathUtil");

const app=express();

app.use(express.urlencoded());
app.use(userRouter); //will handel only user query
app.use("/host",hostRouter);//will handel only host/admin query

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"views","404.html"));
})

app.listen(3000,()=>{
  console.log(`Server started at listening http://localhost:3000`);
})