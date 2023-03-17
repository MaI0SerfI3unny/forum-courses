
const { ToolCourse, Subject, Tag, Category, Question } = require('@/models')
const { Op } = require('sequelize')

exports.searchQuestion = async (req, res) => {
  try {
    const { title, tag = [], category = [] } = req.body
    const optionsArr = []
    optionsArr.push(Subject)

    optionsArr.push({
      model: Category,
      where: category.length ? { id: category } : {},
    })

    optionsArr.push({
      model: Tag,
      where: tag.length ? { id: tag } : {},
    })

    const search = await Question.findAll({
      where: title.length !== 0 ? { title: { [Op.like]: `%${title}%` } } : {},
      include: optionsArr,
    })
    res.status(200).json({ status: 200, data: search })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.searchTool = async (req, res) => {
  try {
    const { title, type = '' } = req.body
    const whereVal = { title: { [Op.like]: `%${title}%` }}
    if(type){ whereVal.type = type }
    
    const search = await ToolCourse.findAll({
      where: whereVal,
    })
    res.status(200).json({ status: 200, data: search })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.searchSubject = async (req, res) => {
  try {
    const { title } = req.body
    const search = await Subject.findAll({
      where: { name: { [Op.like]: `%${title}%` } },
    })
    res.status(200).json({ status: 200, data: search })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.searchSimpleQuestion = async (req, res) => {
  try {
    const { title } = req.body
    const search = await Question.findAll({
      where: { title: { [Op.like]: `%${title}%` } },
      include: [Tag, Category, Subject],
    })
    res.status(200).json({ status: 200, data: search })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}
