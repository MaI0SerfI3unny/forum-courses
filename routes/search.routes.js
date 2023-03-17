const router = require('express-promise-router')()
const {
  searchQuestion,
  searchSimpleQuestion,
  searchSubject,
  searchTool, 
} = require('@/controller/SearchController')
const { getCourseBySearchUdemy } = require('@/controller/UdemyController')
const { getCourseBySearchUdacity } = require('@/controller/UdacityController')
const { getCourseBySearchLynda } = require('@/controller/LyndaController')

router.post('/questions/search', searchQuestion)
router.post('/questions/find', searchSimpleQuestion)
router.post('/subject/search', searchSubject)
router.post('/tool/search', searchTool)
router.post('/udemy/search', getCourseBySearchUdemy)
router.post('/udacity/search', getCourseBySearchUdacity)
router.post('/lynda/search', getCourseBySearchLynda)

module.exports = router
