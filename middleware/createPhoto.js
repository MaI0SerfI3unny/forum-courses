const multer = require('multer')
const path = require('path')

exports.createStorage = (urlPathFolder) => {
  return multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, urlPathFolder)
    },
    filename: function (req, file, callback) {
      callback(null, Date.now().toString())
    },
  })
}

exports.createUpload = (storage, field) => {
  return multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname)
      if (!['.png', '.jpg', '.webp', '.jpeg'].includes(ext)) {
        return callback(new Error('Only images are allowed'))
      }
      callback(null, true)
    },
    limits: { fileSize: 5 * 1024 * 1024 },
  }).fields(field)
}
