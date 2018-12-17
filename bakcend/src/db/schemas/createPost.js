const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    content: {type: String, required: true},
    created: Date,
    voteCount: {type: Number, required: false }
});


// Export the model
module.exports = mongoose.model('posts', ProductSchema);