
const http = require('http') //경로를 안붙이면 모듈
const app  = require('./app') // 경로를 붙이면 앱

http.createServer(app).listen(8000, () => {
   console.log('서버 시작함')
})


