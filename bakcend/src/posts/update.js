

const posts = require('../db/schemas/createPost')
function updateVote(req, res){
    posts.update({content: "hwello"}, {$set:{voteCount: 12}}, function(err){
        if(err){
            console.log(err)
        }
        res.send('vote count updated ')
    })
}

module.exports = updateVote