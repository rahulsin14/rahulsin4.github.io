const express=require('express');
const router=express.Router();
const controller=require('../controllers/user_controller');
router.get('/profile',controller.profile);
router.get('/sign-in',controller.sign_in);
router.get('/sign-out',controller.sign_out);
router.post('/create',controller.create);
module.exports=router;