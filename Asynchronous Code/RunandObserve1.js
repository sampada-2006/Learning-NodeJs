//Blocking v/s Async

const fs=require("fs");
console.log("1.start of script");
//synchronous (blocking) operattion
const dataSync=fs.readFileSync('output.txt','utf-8');
console.log("3. Synchronous read complete");
//Asynchronous (non-blocking) operation
console.log("4. Reading file asynchronously");
fs.readFile('output.txt','utf-8',(err , dataAsync)=>{
  if(err) throw err;
  console.log("6.Asynchronous read complete");
});
console.log("5. End of script");