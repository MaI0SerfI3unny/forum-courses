const router = require('express-promise-router')()
const { getContentUdacityCourse } = require('@/controller/UdacityController')

router.post('/udacity/content', getContentUdacityCourse)

module.exports = router
