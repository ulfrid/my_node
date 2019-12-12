const express = require('express')
const router = express.Router()

const user = require('./user')

router.get('/login', (req, res, next) => { 
    res
      .cookie('usertype', 1)
      .status(200)
      .json({message:'SUCCESS'})
})
    
router.use('/user', user)

module.exports = router