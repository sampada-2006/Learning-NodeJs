
//core modules
const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/pathUtil');

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
      this.id=Math.random().toString();
      Home.fetchAll((registerdHomes)=>{
           registerdHomes.push(this);
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
}
