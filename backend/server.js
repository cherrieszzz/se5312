const express  = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 8082
const students = require('./routes/students')
const config = require('./config.json')

app.use(express.json())
app.use('/students',students)

mongoose.connect(config.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
})

app.get('/api',(req ,res) => {
    res.send("APi running")
})

app.listen(port,() => {
    console.log("api running on port",port)
})