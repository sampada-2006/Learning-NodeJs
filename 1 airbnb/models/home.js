
//core modules
const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/pathUtil');
const Favourite=require('./favourites');
const homeDataPath=path.join(rootDir,'data','homes.json');

module.exports=class Home{
    constructor(houseName,pricePerNight,location,rating,imageurl){
      this.houseName=houseName;
      this.pricePerNight=pricePerNight;
      this.location=location;
      this.rating=rating;
      this.imageurl=imageurl;
      
    }

    save() {
      
      
      Home.fetchAll((registerdHomes)=>{
        if(this.id){ //edit home case
        registerdHomes=registerdHomes.map(home=>{
          if(home.id===this.id){
            return this;
          }
          return home;
        })
      }else { //add home case
        this.id=Math.random().toString();
        registerdHomes.push(this);
      }
          
      const homeDataPath=path.join(rootDir,'data','homes.json');
      fs.writeFile(homeDataPath,JSON.stringify(registerdHomes),error => {
        console.log("File Writing Concluded", error);
      });
      });
      
    }

    static fetchAll(callback) {
      fs.readFile(homeDataPath,(err,data)=>{
        callback(!err? JSON.parse(data) : []);
      });
    }

    static findById(homeId,callback){
       this.fetchAll(homes => {
         const homeFound = homes.find(home => home.id===homeId);
         callback(homeFound);
       })
    }

    static deleteById(homeId,callback){
       this.fetchAll(homes => {
         homes =homes.filter(home=>home.id!==homeId);
         fs.writeFile(homeDataPath,JSON.stringify(homes),error=>{
          Favourite.deleteById(homeId,callback);
         });
       })
    }
}
