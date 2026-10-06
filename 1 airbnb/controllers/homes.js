const Home=require('../models/home');

exports.getAddHome=(req,res,next)=>{
res.render('addHome',{pageTitle:"Register your home",currentPage:"addHome"});
};

exports.postAddHome=(req,res,next)=>{
  const {houseName,pricePerNight,location,rating,imageurl}=req.body;
  const home=new Home(houseName,pricePerNight,location,rating,imageurl);
  home.save();

res.render('homeAdded',{pageTitle:'Home added successfully',currentPage:"homeAdded"});
};

exports.getHomes=(req,res,next)=>{
  const registerdHomes=Home.fetchAll();
  console.log(registerdHomes);
  res.render('home',{registerdHomes:registerdHomes,pageTitle:"airbnb home",currentPage:'home'}); //option for admin to add home list
};

