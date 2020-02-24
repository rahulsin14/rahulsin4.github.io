const express=require('express');
const app=express();
const port=8100;
app.use('/',require('./routes'));
app.set('view_engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error:${err}`);
        return;
    }
    console.log(`running: ${port}`);
});