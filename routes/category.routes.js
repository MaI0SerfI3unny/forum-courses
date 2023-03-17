const router = require('express-promise-router')()
const { getAllCategory } = require('@/controller/CategoryController')

router.get('/get/category', getAllCategory)

module.exports = router
