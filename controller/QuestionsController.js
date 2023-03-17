const {
  Question,
  Category,
  Tag,
  Subject,
  Mark,
  Prerequisites,
  LikeSubject,
} = require('@/models')

const getQuestions = async (req, res) => {
  try {
    const { page = '0', pageSize = '15' } = req.query
    const offset = parseInt(page) * parseInt(pageSize)
    const limit = parseInt(pageSize)
    const questionCount = await Question.findAndCountAll({
      include: [
        Category,
        Tag,
        {
          model: Subject,
          include: [
            { model: Subject, as: 'general' },
            { model: Category, attributes: ['name'] },
            { model: Mark, attributes: ['value'] },
            { model: Prerequisites, attributes: ['name'] },
            { model: LikeSubject, attributes: ['type'] },
          ],
        },
      ],
      offset: offset,
      limit: limit,
      distinct: true,
    })
    res.status(200).json({
      status: 200,
      data: questionCount,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getQuestionOne = async (req, res) => {
  try {
    const { id } = req.params
    const questions = await Question.findByPk(id, {
      include: [
        Category,
        Tag,
        {
          model: Subject,
          include: [
            { model: Subject, as: 'general' },
            { model: Category, attributes: ['name'] },
            { model: Mark, attributes: ['value'] },
            { model: Prerequisites, attributes: ['name'] },
            { model: LikeSubject, attributes: ['type'] },
          ],
        },
      ],
    })
    if (questions === null) {
      res.status(404).json({
        status: 404,
        message: 'Question wasn`t founded',
      })
    } else {
      res.status(200).json({
        status: 200,
        data: questions,
      })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getMyQuestions = async (req, res) => {
  try {
    const { user } = req
    const questionCreator = await user.getQuestions({
      include: [
        Category,
        Tag,
        {
          model: Subject,
          include: [
            { model: Subject, as: 'general' },
            { model: Category, attributes: ['name'] },
            { model: Mark, attributes: ['value'] },
            { model: Prerequisites, attributes: ['name'] },
            { model: LikeSubject, attributes: ['type'] },
          ],
        },
      ],
    })
    res.status(200).json({ status: 200, data: questionCreator })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const createQuestion = async (req, res) => {
  const { title, categoryId, tags = [] } = req.body
  const { user } = req
  if (!title || !categoryId) {
    return res
      .status(403)
      .json({ status: 403, message: 'No required parameters' })
  }
  try {
    const createdQuestion = await Question.create({
      title,
      categoryId,
      userId: user.id,
    })
    await createdQuestion.addTags(tags)

    res.status(200).json({
      status: 200,
      data: createdQuestion,
      tags,
      message: 'Question was create successfully',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

module.exports = {
  getQuestions,
  getMyQuestions,
  createQuestion,
  getQuestionOne,
}
