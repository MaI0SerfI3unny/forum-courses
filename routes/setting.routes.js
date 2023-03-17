const router = require('express-promise-router')()
const {
  getUserSettings,
  updateSettings,
} = require('@/controller/SettingController')
const { withAuth } = require('@/services/auth')

router.post('/get/settings', withAuth, getUserSettings)
router.post('/post/settings/update', withAuth, updateSettings)

module.exports = router
