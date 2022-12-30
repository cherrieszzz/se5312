const mongoose = require('mongoose')

const directSchema = new mongoose.Schema({
    project_num : String,
    direct_tea: String 
})

const direct = mongoose.model('direct',directSchema)

module.exports = direct