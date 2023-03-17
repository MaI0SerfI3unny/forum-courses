const Lynda = require('@/services/lynda/Lynda')

const getCourseBySearchLynda = async (req, res) => {
    try {
      const { search } = req.body
  
      if (!search) {
        return res.status(200).json({ status: 200, data: [] })
      }
      const lyndaSearch = await new Lynda(search).createSearch
      res.status(200).json({ status: 200, data: lyndaSearch })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        status: 500,
        message: 'Some wrong with server. Please try later',
      })
    }
}

const getContentCourseLynda = async (req, res) => {
    try {
      const { link } = req.body
      if (!link) {
        return res
          .status(403)
          .json({ status: 403, message: 'No required parameters' })
      }
      const lyndaContent = await new Lynda(link).createContent
      res.status(200).json({ status: 200, data: lyndaContent })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        status: 500,
        message: 'Some wrong with server. Please try later',
      })
    }
  }

module.exports = { getCourseBySearchLynda,getContentCourseLynda }
