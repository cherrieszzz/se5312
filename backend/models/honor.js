const mongoose = require('mongoose')

const honorSchema = new mongoose.Schema({
    honor: String,
    year: String
})

const honor = mongoose.model('honor', honorSchema)

module.exports = honor