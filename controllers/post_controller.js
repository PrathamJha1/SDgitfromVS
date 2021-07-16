module.exports.post=function(req,res){
    res.send('<h1>This is the Post Section </h1>');
}
module.exports.like=function(req,res){
    res.end('Like Section');
}