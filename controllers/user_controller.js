const User=require('../models/user');
module.exports.profile=function(req,res){
    return res.end('<h1>Profile</h1>');
}
module.exports.sign_in=function(req,res){
    return res.render('user_sign_in',{
        title:'sign_up'
    });
}
module.exports.sign_out=function(req,res){
    return res.render('user_sign_out',{
        title:'sign_in'
    });
}
module.exports.create=function(req,res){
    if(req.body.Password!=req.body.Confirm){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error in finding email");
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creating task");
                    return;
                }
                return res.redirect('/users/sign-out');
            });
        }else{
            return res.redirect('back');
        }
    });
}
module.exports.createSession=function(req,res){
    
}