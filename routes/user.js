const express=require('express');

const controller_user=require('../controllers/user_controller');

const router=express.Router();

router.get('/user',controller_user.profile);
router.get('/user1',controller_user.user1);
module.exports=router;
