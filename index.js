const express=require('express');
const path=require('path');
const app=express();
const port=8000;
app.set('view engine','ejs');
app.set('views','./views');
//use express router
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log("ERROR");
        return;
    }
    console.log("Server is up");
})