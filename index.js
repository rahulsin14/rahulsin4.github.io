const express=require('express');
const app=express();
const port=8100;
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`error:${err}`);
        return;
    }
    console.log(`running: ${port}`);
});