//fake database
const registerdHomes=[];

//core modules
const path=require('path');
const fs=require('fs');
const rootDir=require('../utils/pathUtil');

module.exports=class Home{
    constructor(houseName,pricePerNight,location,rating,imageurl){
      this.houseName=houseName;
      this.pricePerNight=pricePerNight;
      this.location=location;
      this.rating=rating;
      this.imageurl=imageurl;
      
    }

    save() {
      registerdHomes.push(this);
      const homeDataPath=path.join(rootDir,'data','homes.json');
      fs.writeFile(homeDataPath,JSON.stringify(registerdHomes),error => {
        console.log("File Writing Concluded", error);
      });
    }

    static fetchAll() {
      return registerdHomes;
    }
}
