const Udemy = require('@/services/udemy/Udemy')
const reverseContentGet = require('@/services/udemy/reverseContentGet')

const getCourseBySearchUdemy = async (req, res) => {
  try {
    const { search } = req.body

    if (!search) {
      return res.status(200).json({ status: 200, data: [] })
    }
    const udemySearch = await new Udemy(search).createSearch
    const parsedSearchArr = udemySearch.map((el) => ({
      specialId: el.id,
      name: el.title,
      link: 'https://www.udemy.com' + el.url,
      source: 'udemy',
      price: el.price_detail.amount,
      typePayment: el.is_paid ? 'Paid' : 'Free',
      gallery: [el.image_480x270],
      additional: {
        description: el.headline,
      },
    }))
    res.status(200).json({ status: 200, data: parsedSearchArr })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getInfoCourse = async (req, res) => {
  try {
    const { id } = req.body
    if (!id) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const udemyInfo = await new Udemy(id).createInfo

    res.status(200).json({ status: 200, data: udemyInfo })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getContentCourse = async (req, res) => {
  try {
    const { id } = req.body
    if (!id) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }
    const parseContent = await reverseContentGet(id)
    res.status(200).json({ status: 200, data: parseContent })
  } catch (e) {
    //console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

module.exports = { getCourseBySearchUdemy, getInfoCourse, getContentCourse }
