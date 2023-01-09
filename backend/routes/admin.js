const express = require('express')
const router = express.Router()
const isAdmin = require('../middlewares/isAdmin')

router.get('/', isAdmin, (req, res)=> {
    res.send("This is a admin page")
})

module.exports = router