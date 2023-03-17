const router = require('express-promise-router')()
const { withAuth } = require('@/services/auth')
const verifyGallery = require("@/middleware/verifyGallery")
const {
  getCourses,
  getCourseOne,
  getMyCourse,
  getAvailableTypeCourse,
  createCourse,
  getAvailableTypePayment,
  getAvailableSource,
  setLikeOrDislikeCourse
} = require('@/controller/CourseController')

router.get('/courses', getCourses)
router.get('/courses/type', getAvailableTypeCourse)
router.get('/courses/payment', getAvailableTypePayment)
router.get('/courses/sources', getAvailableSource)
router.get('/course/:id', getCourseOne)
router.post("/course/create",[withAuth, verifyGallery], createCourse)
router.get("/course/my", withAuth, getMyCourse)
router.post("/course/set/like", withAuth, setLikeOrDislikeCourse)

module.exports = router