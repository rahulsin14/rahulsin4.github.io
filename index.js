const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8100;
app.use(express.urlencoded());
app.use(cookieParser());
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
const db=require('./config/mongoose');
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