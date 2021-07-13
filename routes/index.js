const express=require('express');

const controller_home=require('../controllers/home_controller');
const router=express.Router();

console.log("router is loaded");

router.get('/',controller_home.home);
router.get('/user',require('./user'));
router.get('/post',require('./post'));
module.exports=router;