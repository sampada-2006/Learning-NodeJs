const Home=require('../models/home');

exports.getIndex=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>res.render('store/index',{registerdHomes:registerdHomes,pageTitle:"airbnb home",currentPage:'index'})
);
  
};
exports.getHomes=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>res.render('store/home-list',{registerdHomes:registerdHomes,pageTitle:"Home List",currentPage:'home'})
);
  
};

exports.getBookings=(req,res,next)=>{
  res.render('store/bookings',{pageTitle:"My Bookings",currentPage:'bookings'})
  
};

exports.getFavouriteList=(req,res,next)=>{
  Home.fetchAll((registerdHomes)=>res.render('store/favourite-list',{registerdHomes:registerdHomes,pageTitle:"Favourites",currentPage:'favourites'})
);
  
};
  
exports.getHomesDetails=(req,res,next) => {
  const homeId=req.params.homeId;
  Home.findById(homeId,home=>{
    if(!home) {
      console.log("Home not found");
      res.redirect("/homes");
    }else{
       res.render('store/home-detail',{home:home,pageTitle:"Home Detail",currentPage:'home-details'});
    }
  });

};


