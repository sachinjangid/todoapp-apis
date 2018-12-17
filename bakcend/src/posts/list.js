const posts = require('../db/schemas/createPost')
function updateVote(req, res){
    posts.find( function(err, result){
        if(err){
            console.log(err)
        }
        console.log(result)
        res.send(result)
    })
}

module.exports = updateVote