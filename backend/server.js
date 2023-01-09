const express  = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const port = 8082
const config = require('./config.json')
const auth = require('./routes/auth')
const stuGet = require('./routes/stuGet')
const teacherGet = require('./routes/teacherGet')

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth',auth)
app.use('/stuget',stuGet)
app.use('/teacherget',teacherGet)

mongoose.connect(config.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
})

app.get('/',(req ,res) => {
    res.send("APi running")
})

app.listen(port,() => {
    console.log("api running on port",port)
})