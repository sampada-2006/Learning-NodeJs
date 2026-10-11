const Home=require('../models/home');

exports.getAddHome=(req,res,next)=>{
res.render('host/addHome',{pageTitle:"Register your home",currentPage:"addHome"});
};

exports.getHostHomes=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>res.render('host/host-home-list',{registerdHomes:registerdHomes,pageTitle:"Host Home List",currentPage:'host-homes'})
);
  
};


exports.postAddHome=(req,res,next)=>{
  const {houseName,pricePerNight,location,rating,imageurl}=req.body;
  const home=new Home(houseName,pricePerNight,location,rating,imageurl);
  home.save();

res.render('host/home-added',{pageTitle:'Home added successfully',currentPage:"homeAdded"});
};
      

