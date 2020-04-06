const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000

mongoose.connect('mongodb://newUser:s123456@ds135974.mlab.com:35974/posts')
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const cratePost = require('./src/posts/create')
const updateVote = require('./src/posts/update')
const listPost = require('./src/posts/list')

app.post('/post', cratePost)
app.put('/post/:id', updateVote)
app.get('/post', listPost)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))