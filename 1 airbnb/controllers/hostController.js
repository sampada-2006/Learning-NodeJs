const Home=require('../models/home');

exports.getAddHome=(req,res,next)=>{
res.render('host/edit-home',{pageTitle:"Register your home",currentPage:"addHome", editing:false});
};

exports.getEditHome=(req,res,next)=>{
  const homeId= req.params.homeId;
  const editing= req.query.editing === 'true';
  Home.findById(homeId, home=> {
    if(!home){
      console.log("home not found for editing");
      return res.redirect("/host/host-home-list")
    }
     console.log(homeId, editing, home);
res.render('host/edit-home',{home:home, pageTitle:"Edit your home",currentPage:"host-homes",
  editing :editing,
});
  })
  
};

exports.postEditHome=(req,res,next) =>{
  const {id , houseName,pricePerNight,location,rating,imageurl}=req.body;
  const home=new Home(houseName,pricePerNight,location,rating,imageurl);
  home.id=id;
  home.save();
  Home.fetchAll((registerdHomes)=>res.render('host/host-home-list',{registerdHomes:registerdHomes,pageTitle:"Host Home List",currentPage:'host-homes'})
);
}
exports.getHostHomes=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>res.render('host/host-home-list',{registerdHomes:registerdHomes,pageTitle:"Host Home List",currentPage:'host-homes'})
);
  
};


exports.postAddHome=(req,res,next)=>{
  const {houseName,pricePerNight,location,rating,imageurl}=req.body;
  const home=new Home(houseName,pricePerNight,location,rating,imageurl);
  home.save();

Home.fetchAll((registerdHomes)=>res.render('host/host-home-list',{registerdHomes:registerdHomes,pageTitle:"Host Home List",currentPage:'host-homes'})
);
};

exports.postDeleteHome=(req,res,next)=>{
  const homeId=req.params.homeId;
  console.log('came to delete ',homeId);
  Home.deleteById(homeId,error =>{
    if(error){
      console.log('Error while deleting ',error);
    }
    Home.fetchAll((registerdHomes)=>res.render('host/host-home-list',{registerdHomes:registerdHomes,pageTitle:"Host Home List",currentPage:'host-homes'})
);
  })

};