const express=require('express');
const app=express();
const port=8100;
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`error:${err}`);
        return;
    }
    console.log(`running: ${port}`);
})