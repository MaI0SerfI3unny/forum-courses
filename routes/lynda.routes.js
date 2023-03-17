const router = require('express-promise-router')()
const { getContentCourseLynda } = require('@/controller/LyndaController')

router.post('/lynda/content', getContentCourseLynda)

module.exports = router