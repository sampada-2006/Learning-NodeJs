const http=require('http');
const testingSyntax=require('./syntax');
const testingRuntime=require('./runtime');
const testingLogical=require('./logical');
const requestHandler=require('./user');

const server = http.createServer(requestHandler);
//const server=http.createServer((req,res)=>{
  //console.log(req.url, req.method);
  //testingSyntax();
  //testingRuntime();
  //testingLogical();
//});
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
})