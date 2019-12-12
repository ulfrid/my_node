const validator = require('express-validator')

const validationMiddleware = (...validators) => {

    const result = (req, res, next) => {
      const errors =validator.validationResult(req)
      .array()
      if (errors.length) return res.status(400).json({
        message : '요청 형식이 잘못됐습니다.',
        errors,
      })
        next()
    }

    return [
        ...validators,
        result,
    ]
}

module.exports = {
    validationMiddleware
}

