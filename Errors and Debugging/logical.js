const testingLogical=()=>{
  let x=10;
  if(x=5){
    console.log(`x is ${x}`); //assignment instead of comparison
  }else {
    console.log("x is 10");
  }
};
module.exports=testingLogical;