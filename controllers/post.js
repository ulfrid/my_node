const { readJSON, writeJSON } = require('../services/json')
const validator = require('express-validator')
const pipe = (...funcs) => arr => funcs.reduce((prev, func)=>{
    return func(prev)
}, arr)

// offset, limit, order
const getAllPosts = async (req, res, next) => {
   try{
       const {
           offset = 1,
           limit = 20,
           order = false,
       } = req.query
       const data = await readJSON('post')
       
       const result = pipe(
           data => order ? ([...data]).reverse() :data,
           data => data.slice(limit * (offset - 1), limit * offset),
       )(data)

       res.json({
           message: '목록을 조회합니다',
           data:{
            count: data.length,
            list: result,
        },
       }) 
   } catch (err) {
       next(err)
   }
}
// id
const getOnePost = async (req, res, next) => {
  try{
    const id = req.params.id
    const data = await readJSON('post')
    const result = data.filter(e => e.id === id)[0]

    res.json({
        message: '응',
        data: result
    })

  } catch (err) {
        next(err)
  }
}
// title, content
const createPost = async (req, res, next) => {
  try{
    const data = await readJSON('post')
    const id = Date.now()
    const result = data.concat({
        id,
        title: req.body.title,
        content: req.body.content,
    })
    await writeJSON('post', result)
    res.json({
        message: '',
        data: {
            id,
        }
    })
  } catch (err) {
    next(err)
  }
}
// id, title, content
const updatePost = async (req, res, next) => {
  try{
      
  } catch (err) {
     next(err)
  }
}
//id
const deletePost = async (req, res, next) => {
  try{
      
  } catch (err) {
     next(err)
  }
}
const validate = {
  id: validator.param('id').toInt().isInt(),
  offset: validator.query('offset').optional().toInt().isInt(),
  limit: validator.query('limit').optional().toInt().isInt(),
  order: validator.query('order').optional().isBoolean(),
  body: [
      validator.body('title').isLength({min: 5, max: 200}),
      validator.body('content').isLength({min: 5}),
  ]
}

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
  validate,
}
