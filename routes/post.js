const express=require('express');
const contoller_post=require('../controllers/post_controller')
const router = express.Router();

router.get('/post',contoller_post.post);
module.exports=router;
