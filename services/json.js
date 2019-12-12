const fs = require('fs')
const path = require('path')

const readJSON = (name) => new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, `../data/${name}.json`), (err, data) => {
    if (err) return reject(err)
    try {
      const result = JSON.parse(data)
      resolve(result)
    } catch (e){
      reject(e)
    }
  })
})

const writeJSON = (name, data) => new Promise((resolve, reject) => {
  try{
    const json = JSON.stringify(data)
    fs.writeFile(path.join(__dirname, `../data/${name}.json`),json, err => {
    if (err) return reject(err)
    resolve(true)
    })
  }catch (e){
      reject(e)
  }
})

module.exports = {
  readJSON,
  writeJSON,
}