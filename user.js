const http=require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  if(req.url==='/'){
      res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Node Server</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
   res.write('<body><h1>Enter your Details:</h1>')
   res.write('<form action="/submit-details" method="POST">');
   res.write('<input type="text" name="username" placedolder="Enter your name"><br>');    
   res.write('<label for="male"> Male </label>');              
   res.write('<input type="radio" id="male" name="gender" value="male"><br>');
   res.write('<label for="female">Female</label>');
   res.write('<input type="radio" id="female" name="gender" value="female"><br>');
   res.write('<input type="submit" value="submit">');
   res.write('</form>');
   res.write('</body>');
  res.write('</html>');
  res.end();
  }else if(req.url.toLowerCase()==="/submit-details" && req.method=="POST"){
      fs.writeFileSync('user.txt', 'Sampada Jadhav');
      res.statusCode=302; //for redirection
      res.setHeader('Location', '/');
      res.end(); 
  }else{
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