const router = require('express-promise-router')()
const {
  LoginController,
  RegisterController,
  changePassword,
  GetUserInfo,
  createNewAvatar,
  RegisterBySocialController,
  getUser,
  updateUserInfo,
} = require('../controller/UserController')
const { withAuth,passport } = require('@/services/auth')
const multer = require('multer')
const upload = multer({ dest: 'mediafile/avatar' })

router.post('/login', LoginController)
router.post('/signup', RegisterController)

//Google Auth
router.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }))
router.get("/auth/google/callback", passport.authenticate("google", { session: false }), RegisterBySocialController)

router.post('/post/avatar/change', [withAuth, upload.single('avatar')], createNewAvatar)
router.get('/user', withAuth, getUser)
router.post('/post/user/info', withAuth, GetUserInfo)
router.post('/post/user/info/change', withAuth, updateUserInfo)
router.post('/post/change/password', withAuth, changePassword)

module.exports = router
