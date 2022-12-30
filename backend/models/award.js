const mongoose = require('mongoose')

const awardSchema = new mongoose.Schema({
        num:String,
        event_num:String,
        project_num: String,
        project_name: String,
        track: String,
        team: String,
        project_class: String,
        collage: String,
        award: String,
        ps: String 
})

const award = mongoose.model('award',awardSchema)

module.exports = award