const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const routes = require('./routes')

app.use(cookieParser())

app.use(routes)

app.use((req, res, next) => {
  const err = new Error('존재하지 않는 URL 입니다.')
  err.status = 404
  next(err)
  // res.status(404).json({
  //   message: '존재하지 않는 url 입니다'
  // })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500).json({
    message: err.message || '에러가 발생했습니다.',
  })
})
//app.get()  // <---라우터
//app.post() // <---라우터
//app.use()  // <---라우터
// 복잡한 경로를 한번에 정리할때, 보안에 필요할때

//app.all()  // <---라우터
//모든 http 메서드를 지원함
module.exports = app