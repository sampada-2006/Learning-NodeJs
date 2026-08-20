const http=require('http');

const server=http.createServer((req,res)=>{
  if(req.url=== '/home'){
       res.write('<h1>Welcome to Home<h1>');
       return res.end();
    }else if(req.url=== '/men'){
       res.write('<h1>Welcome to Men Section<h1>');
       return res.end();
    }else if(req.url=== '/women'){
       res.write('<h1>Welcome to Women Section<h1>');
       return res.end();
    }else if(req.url=== '/kids'){
       res.write('<h1>Welcome to Kids Section<h1>');
       return res.end();
    }else if(req.url=== '/cart'){
       res.write('<h1>Welcome to Cart<h1>');
       return res.end();
    }
      res.write('<header>');
      res.write('<ul>');
      res.write('<li><a href="/home">Home</a></li>');
      res.write('<li><a href="/women">Women</a></li>');
      res.write('<li><a href="/men">Men</a></li>');
      res.write('<li><a href="/kids">Kids</a></li>');
      res.write('<li><a href="/cart">Cart</a></li>');
      res.write('<ul>');
      res.write('</header>');
});

server.listen(3000, ()=>{console.log(`Server running at http://localhost:3000`)});