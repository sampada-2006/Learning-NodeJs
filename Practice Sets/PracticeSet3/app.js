const express= require('express');

const app=express();

app.use((req,res,next)=>{
  console.log("First middleware", req.url, req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Second middleware",req.url, req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Third middleware",req.url, req.method);
  //res.send("<p>In third middleware..sending response</p>")
  next();
});

app.get("/",(req,res,next)=>{
  console.log("handelling get on /",req.url, req.method);
  res.send("<p>welcome to Home page</p>")
  next();
});

app.get("/contact-us",(req,res,next)=>{
  console.log("Getting form details",req.url, req.method);
  res.send(`<form action="/contact-us" method="POST">
    <input type="email" name="Email" placeholder="Enter your Email"/>
    </br>
    <input type="text" name="name" placeholder="Enter your name"/>
    </br>
    <input type="submit" value="submit"/>
    </form>`);
});
app.post("/contact-us",(req,res,next)=>{
  console.log("Data posted succesfully",req.url, req.method,req.body);
  res.send(`<p>We will contact you shortly</p>`);
});

app.listen(3000,()=>{console.log("Server started listening at http://localhost:3000")});
