const router = require('express-promise-router')()
const { withAuth } = require('@/services/auth')
const {
  createComment,
  deleteMessage,
  setLikeOrDislike,
  multipleCreateComment,
  changeInfoComment,
  createReplyComment,
  getCommentById,
} = require('@/controller/CommentController')

router.post('/comment/course/create', withAuth, createComment)
router.post('/comment/course/reply', withAuth, createReplyComment)
router.post('/comment/course/multiple/create', withAuth, multipleCreateComment)
router.post('/comment/course/update', withAuth, changeInfoComment)
router.post('/comment/course/like', withAuth, setLikeOrDislike)
router.get('/comment/:id', getCommentById)
router.delete('/comment/course/delete/:id', withAuth, deleteMessage)

module.exports = router
