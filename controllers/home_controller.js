module.exports.home=function(req,res){
    console.log(req.cookies);
    res.cookie('user1',11);
    return res.render('home',{
        title:'Home'
    });
}
