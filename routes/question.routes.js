const { withAuth } = require('@/services/auth')
const router = require('express-promise-router')()

const {
  getQuestions,
  createQuestion,
  getMyQuestions,
  getQuestionOne,
} = require('@/controller/QuestionsController')

// get
router.get('/questions', getQuestions)
router.get('/question/:id', getQuestionOne)
router.get('/questions/my', withAuth, getMyQuestions)

// post
router.post('/question/create', withAuth, createQuestion)

module.exports = router
