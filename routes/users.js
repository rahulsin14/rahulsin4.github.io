const express=require('express');
const router=express.Router();
const controller=require('../controllers/user_controller');
router.get('/profile',controller.profile);
module.exports=router;