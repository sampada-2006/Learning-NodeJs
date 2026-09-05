
const add=require("./add");

const calculator=(req,res)=>{
     if(req.url==='/'){
      res.write('<h1>Welcome to Home Page of Calculator</h1>');
      res.write("<a href='/calculator'>Click to view calculator</a>");
      res.end();
     }else if(req.url==="/calculator"){
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<form action="/calculator-result" method="POST">');
        res.write('<input type="text" placeholder="enter 1st no." name="n1"/>');
        res.write('<p>+</p>');
        res.write('<input type="text" placeholder="enter 2nd no." name="n2"/>');
        res.write('<input type="submit" value="Sum"/>');
      res.write('</form>');
      res.write('</html>');
      return res.end();
     }else if(req.url==='/calculator-result' && req.method==="POST"){
        const body=[];
        console.log("1. started listening request")
        req.on("data",(chunk)=>{
          console.log("2. chunk read");
          body.push(chunk)
        });
        let result;
        req.on('end',()=>{
          console.log("3. end event came");
          const fullBody=Buffer.concat(body).toString();
          const params=new URLSearchParams(fullBody);
          console.log(fullBody);
          const bodyObject=Object.fromEntries(params);
          console.log(bodyObject);
          result=add(bodyObject);
          console.log(result);
          
        });
        console.log("4. displaying result");
           res.setHeader('Content-Type','text/html');
          res.write(`<html>
      <h1>Result will be displayed here</h1>
          <h2>${result}</h2>
          </html>`);
          return res.end();    
      
     }else{
      res.write("<html><a href='/'>Go To Home Page</html>");
     }
};

module.exports=calculator;