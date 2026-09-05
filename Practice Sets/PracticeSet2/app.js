const http=require('http');
const calculator=require('./calculator');
const server=http.createServer(calculator);


const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server started at http://localhost:${PORT}`);
});