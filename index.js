const express=require('express');
const app=express();
const port=8100;
app.listen(port,function(err){
    if(err){
        console.log(`error:${err}`);
        return;
    }
    console.log(`running: ${port}`);
})