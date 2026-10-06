//core module
const path=require('path');

//external module
const express=require('express');

//local module
const userRouter=require('./routes/userRouter'); //Local module
const {hostRouter}=require("./routes/hostRouter");
const rootDir=require("./utils/pathUtil");
const errorsController=require('./controllers/errors');

const app=express();
app.set('view engine','ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(userRouter); //will handel only user query
app.use("/host",hostRouter);//will handel only host/admin query

app.use(express.static(path.join(rootDir,'public')));
app.use(errorsController.pageNotFound);

app.listen(3000,()=>{
  console.log(`Server started at listening http://localhost:3000`);
})