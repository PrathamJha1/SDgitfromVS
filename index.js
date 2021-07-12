const express=require('express');
const path=require('path');
const app=express();
const port=8000;
app.get('/',function(req,res){
    res.send("HELLO World");
})
app.listen(port,function(err){
    if(err){
        console.log("ERROR");
        return;
    }
    console.log("Server is up");
})