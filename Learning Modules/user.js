
const fs=require('fs');

const userRequestHandler=(req,res)=>{
  console.log(req.url);
  console.log(req.method);
 // console.log(req.headers);
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
    const body =[];

      req.on("data", (chunk) =>{
             console.log(chunk);
             body.push(chunk);
      })
      req.on('end',() => {
        const fullBody=Buffer.concat(body).toString();
        const params= new URLSearchParams(fullBody);
        console.log(fullBody);
        //const bodyObject={};
        //for(const [key,value] of params.entries()){
          //bodyObject[key]=value;
        //}
        const bodyObject= Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFile('user.txt',JSON.stringify(bodyObject),error =>{
               res.statusCode=302; //for redirection
        res.setHeader('Location', '/');
        return res.end(); 
        } );
        
      })
      
      
  }else{
     res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Node Server</title></head>');
  res.write('<body><h1>404</h1></body>');
  res.write('</html>');
  res.end("Hello World");    /*Browser displays "Hello World"*/
  }
  
  //process.exit(); //Stops the event loop and kills the server
};

module.exports =userRequestHandler;

