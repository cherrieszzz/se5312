const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    admin_name:String,
    password:String
})

const admin = mongoose.model('admin',adminSchema)

module.exports = admin