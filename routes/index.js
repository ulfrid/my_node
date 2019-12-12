const express = require('express')
const router = express.Router()

const user = require('./user')
const post = require('./post')

router.get('/login', (req, res, next) => { 
    res
      .cookie('usertype', 1)
      .status(200)
      .json({message:'SUCCESS'})
})
    
router.use('/user', user)
router.use('/post', post)

module.exports = router