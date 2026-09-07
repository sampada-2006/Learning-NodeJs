//Event Loop sequence
console.log('1. Start of script');
//Microtask queue (Promise)
//Promoise.resolve().then(() => console.log('2.Microtask 1'));
 //Timer queue
 setTimeout(()=> console.log('3. Timer 1'), 0);

 //I/O queue
 const fs = require('fs');
 fs.readFile('output.txt',()=>console.log("4.I/O operation"));

 //check queue
 setImmediate(()=> console.log('5. Immediate 1'));

//close queue
process.on('exit',(code)=>{
  console.log('6.Exit Event');
});

console.log("7.End of script");