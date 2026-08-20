const http=require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  if(req.url==='/'){
      res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Node Server</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
  res.write('</html>');
  res.end("Hello World");    /*Browser displays "Hello World"*/
  }else if(req.url==='/products'){
       res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Node Server</title></head>');
  res.write('<body><h1>Checkout our Products</h1></body>');
  res.write('</html>');
  res.end("Hello World");    /*Browser displays "Hello World"*/
  } else{
     res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Node Server</title></head>');
  res.write('<body><h1>404</h1></body>');
  res.write('</html>');
  res.end("Hello World");    /*Browser displays "Hello World"*/
  }
  
  //process.exit(); //Stops the event loop and kills the server
})

const PORT=3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});