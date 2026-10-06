const registerdHomes=[];

exports.getAddHome=(req,res,next)=>{
res.render('addHome',{pageTitle:"Register your home",currentPage:"addHome"});
};

exports.postAddHome=(req,res,next)=>{
  registerdHomes.push({House:req.body});
res.render('homeAdded',{pageTitle:'Home added successfully',currentPage:"homeAdded"});
};

exports.getHomes=(req,res,next)=>{
  console.log(registerdHomes);
  res.render('home',{registerdHomes:registerdHomes,pageTitle:"airbnb home",currentPage:'home'}); //option for admin to add home list
};

