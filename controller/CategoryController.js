const { Category, Question } = require('@/models/')

const getAllCategory = async (_, res) => {
  try {
    const arrCategory = []
    await Category.findAll({
      include: [{ model: Question }],
    }).then(function (obj) {
      obj.map((el) =>
        arrCategory.push({
          id: el.id,
          name: el.name,
          count: el.questions.length,
        })
      )
    })

    res.status(200).json({ status: 200, data: arrCategory })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

module.exports = { getAllCategory }
