const router = require('express-promise-router')()
const { getAllTags } = require('@/controller/TagsController')

router.get('/get/tags', getAllTags)

module.exports = router
