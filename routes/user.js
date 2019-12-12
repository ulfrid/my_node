const express = require('express')
const validator = require('express-validator')
const { validationMiddleware }= require('../controllers/validators')
const router = express.Router()
const { checkUser } = require('../controllers/auth')
const json = require('../services/json')
router.use(checkUser)

router.get('/', (req, res, next) => {
  json.writeJSON('test',{test:'성공'})
  .then(rs => {
      console.log(rs)
  }).catch(er =>{
      console.log(er)
  })
  const page = req.query.page
  console.log(req.query)
  res.status(200).json({name:"유저목록"})
})

router.get('/:id', validationMiddleware(
  validator.param('id').toInt().isInt(),
), (req, res, next) => {
  const id = req.params.id
  console.log(id)
  res.status(200).json({ 
    name: '특정 유저',
    id  
  })
})

module.exports = router