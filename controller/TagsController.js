const Tags = require('../models/Tag')

exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tags.findAll()
    res.status(200).json({ status: 200, data: tags })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}
