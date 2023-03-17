const router = require('express-promise-router')()
const { withAuth } = require('@/services/auth')
const {
  getAllSubjects,
  createSubjects,
  setNewMark,
  setLikeOrDislike,
  addNewGeneralForSubject,
} = require('@/controller/SubjectController')

router.get('/get/subjects', getAllSubjects)
router.post('/mark/subject/set', withAuth, setNewMark)
router.post('/subject/like', withAuth, setLikeOrDislike)
router.post('/subject/create', withAuth, createSubjects)
router.post('/subject/option/add', withAuth, addNewGeneralForSubject)

module.exports = router
