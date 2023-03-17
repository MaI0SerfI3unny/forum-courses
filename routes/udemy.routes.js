const router = require('express-promise-router')()
const {
  getInfoCourse,
  getContentCourse,
} = require('@/controller/UdemyController')

router.post('/udemy/info', getInfoCourse)
router.post('/udemy/content', getContentCourse)

module.exports = router
