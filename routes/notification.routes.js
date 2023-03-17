const { withAuth } = require('@/services/auth')
const router = require('express-promise-router')()
const {
  getMyNotification,
  getCountUnreadNotification,
} = require('@/controller/NotificationController')

router.post('/notification/my', withAuth, getMyNotification)
router.post(
  '/notification/my/count_unread',
  withAuth,
  getCountUnreadNotification
)

module.exports = router
