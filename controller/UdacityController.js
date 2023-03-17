const Udacity = require('@/services/udacity/Udacity')

const getCourseBySearchUdacity = async (req, res) => {
  try {
    const { search } = req.body

    if (!search) {
      return res.status(200).json({ status: 200, data: [] })
    }
    const udacitySearch = await new Udacity(search).createSearch
    res.status(200).json({ status: 200, data: udacitySearch })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getContentUdacityCourse = async (req, res) => {
  try {
    const { link } = req.body
    if (!link) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }
    const udacityContent = await new Udacity(link).createContent
    res.status(200).json({ status: 200, data: udacityContent })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

module.exports = { getCourseBySearchUdacity, getContentUdacityCourse }
