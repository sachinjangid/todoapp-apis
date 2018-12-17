
const createPosts = require('../db/schemas/createPost')

function createPost(req, res) {
    console.log('hello')
    let newPost = new createPosts(
        {
            content: req.body.content,
            created: new Date(),
            voteCount: 0
        }
    );

    newPost.save(function (err) {
        if (err) {
            console.log(err);
            
        }
        res.send('Product Created successfully')
    })
}

module.exports = createPost