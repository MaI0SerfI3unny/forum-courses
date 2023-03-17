const router = require('express-promise-router')()
const { withAuth } = require('@/services/auth')
const {
  setFollowSubject,
  getMyFollowersSubjects,
  setFollowCourse,
  getMyFollowersCourse
} = require('@/controller/FollowerController')

router.post('/follower/subject', withAuth, setFollowSubject)
router.post('/follower/course', withAuth, setFollowCourse)
router.get('/my/follower/subject', withAuth, getMyFollowersSubjects)
router.get('/my/follower/course', withAuth, getMyFollowersCourse)

module.exports = router
