const testingRuntime=()=>{
  //console.log(x); //refersnce error (runtime error)
  const num=10;
  num();
}
module.exports=testingRuntime;