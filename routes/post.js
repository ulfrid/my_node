const express = require('express')
const router = express.Router()

const { validationMiddleware } = require('../controllers/validators')

const {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
  validate,
} = require('../controllers/post')

//목록조회
router.get('/', validationMiddleware(
  validate.offset,
  validate.limit,
  validate.order,
),getAllPosts)
//단일조회
router.get('/:id', validationMiddleware(
  validate.id,
), getOnePost)
//생성
router.post('/', validationMiddleware(
  validate.body,
),createPost)
//수정
router.post('/:id', validationMiddleware(
  validate.id,
  validate.body,
), updatePost)
//삭제
router.get('/:id', validationMiddleware(
  validate.id
),deletePost)


module.exports = router 