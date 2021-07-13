const express=require('express');

const controller_user=require('../controllers/user_controller');

const router=express.Router();

router.get('/user',controller_user.profile);

module.exports=router;
