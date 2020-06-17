const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')

//Model
//add route api
const posts = require('./routes/api/posts')

const app = express()

//BodyParser middleware
app.use(bodyParser.json())

//DB Config
const db = require("./config/keys").mongoURI

//Connect to Mongo

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

mongoose.connect(db)
    .then(() => console.log('Connect to MongoDB..'))
    .catch(err => console.error('Could not connect to MongoDB..', err))

//set CORS header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

//use Routes
app.use('/api/posts', posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on Port ${port}`))