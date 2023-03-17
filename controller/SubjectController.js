const {
  QuestionSubjects,
  Follower,
  SubjectAdditional,
  Prerequisites,
  LikeSubject,
  Mark,
  Category,
  Subject,
  Question,
} = require('@/models')
const option = require('@/options')

exports.getAllSubjects = async (req, res) => {
  try {
    const { page = '0', pageSize = '15', idUser } = req.query
    const offset = parseInt(page) * parseInt(pageSize)
    const limit = parseInt(pageSize)
    const SubModel = [
      { model: Subject, as: 'general' },
      { model: Category, attributes: ['name'] },
      { model: Mark, attributes: ['value'] },
      { model: Prerequisites, attributes: ['name'] },
      { model: LikeSubject, attributes: ['type'] },
    ]

    if (idUser) {
      SubModel.push({ model: Follower, where: { userId: idUser } })
    }

    const subject = await Subject.findAndCountAll({
      include: SubModel,
      offset: offset,
      limit: limit,
      distinct: true,
    })

    res.status(200).json({
      status: 200,
      data: subject,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.setNewMark = async (req, res) => {
  try {
    const { value, subjectId } = req.body
    const { user } = req
    if (!value || !subjectId) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    if (value < 0 || value > 5 || typeof value !== 'number') {
      return res
        .status(401)
        .json({ status: 401, message: 'Incorrect mark number' })
    }

    const findExistMark = await Mark.findAll({
      where: { subjectId: subjectId, userId: user.id },
    })
    if (findExistMark.length) {
      return res
        .status(401)
        .json({ status: 401, message: 'Mark already exist for this subject' })
    }

    try {
      await Mark.create({
        subjectId,
        value,
        userId: user.id,
      })

      res.status(200).json({
        status: 200,
        message: 'Mark was set successfully',
      })
    } catch (e) {
      console.error(e)
      res.status(403).json({
        status: 403,
        message: 'Some wrong with server. Please try later',
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.addNewGeneralForSubject = async (req, res) => {
  try {
    const { name, subjectId } = req.body
    const { user } = req
    if (!name || !subjectId) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findSubject = await Subject.findByPk(subjectId)
    if (!findSubject) {
      return res
        .status(404)
        .json({ status: 404, message: 'Subject wasn`t founded' })
    }

    const createOption = await Subject.create({
      title: name,
      type: 'specific',
      userId: user.id,
      categoryId: findSubject.categoryId,
    })

    await SubjectAdditional.create({
      general_id: findSubject.id,
      specific_id: createOption.id,
    })
    res.status(200).json({
      status: 200,
      message: 'Option was successfully added for subject',
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.setLikeOrDislike = async (req, res) => {
  try {
    const { type, subjectId } = req.body
    const { user } = req

    if (!type || !subjectId || typeof subjectId !== 'number') {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findTypeLike = option.typeLike.filter((el) => el.name === type)

    if (!findTypeLike.length) {
      return res.status(403).json({
        status: 403,
        message: 'Type like wasn`t founded. Must `like` or `dislike`',
      })
    }

    const findSubject = await Subject.findByPk(subjectId)
    if (!findSubject) {
      return res
        .status(404)
        .json({ status: 404, message: 'Subject wasn`t founded' })
    }

    const findExistLike = await LikeSubject.findOne({
      where: { subjectId, userId: user.id },
    })

    if (findExistLike) {
      await LikeSubject.update(
        { type },
        { where: { subjectId, userId: user.id } }
      )
    } else {
      await LikeSubject.create({
        userId: user.id,
        subjectId,
        type,
      })
    }
    res.status(200).json({ status: 200, message: 'Like was set for subject' })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.createSubjects = async (req, res) => {
  try {
    let {
      type,
      options = [],
      prerequisites = [],
      categoryId,
      title,
      questionId,
    } = req.body
    const info = req.user

    if (!type || !categoryId || !title || !questionId) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findQuessById = await Question.findByPk(questionId)
    if (!findQuessById) {
      return res
        .status(404)
        .json({ status: 404, message: 'Question not founded' })
    }

    const findExistType = option.typeSubject.filter((el) => el.name === type)
    if (!findExistType.length) {
      return res
        .status(404)
        .json({ status: 403, message: 'Type was not founded' })
    }

    if (options.length && type === 'specific') {
      return res.status(403).json({
        status: 403,
        message: "Subjects with type 'specific' can`t must have options",
      })
    }

    try {
      const arrOption = []
      const arrCheckedOption = []

      if (options.length) {
        const arrOptions = []
        options.map((el) => {
          arrOptions.push({
            title: el,
            type: 'specific',
            userId: info.id,
            categoryId,
          })
        })
        const createOption = await Subject.bulkCreate(arrOptions)
        createOption.map((item) => arrOption.push(item.id))
      }

      const createdSubject = await Subject.create({
        title,
        categoryId,
        type,
        userId: info.id,
      })

      const newArrPrerequisites = []
      const findExist = await Prerequisites.findAll({
        where: { name: prerequisites },
      })
      findExist.map((item) => newArrPrerequisites.push(item))

      if (findExist.length === 0 || findExist.length !== prerequisites.length) {
        const arrStarter = []
        prerequisites.map((item) => arrStarter.push({ name: item }))
        const checker = await Prerequisites.bulkCreate(arrStarter, {
          ignoreDuplicates: true,
        })
        checker.map((el) => {
          if (
            newArrPrerequisites.filter(
              (existItem) => existItem.name === el.name
            ).length === 0
          ) {
            newArrPrerequisites.push(el)
          }
        })
      }

      arrOption.map((option) => {
        arrCheckedOption.push({
          general_id: createdSubject.id,
          specific_id: option,
        })
      })

      createdSubject.addPrerequisites(newArrPrerequisites)
      QuestionSubjects.create({
        subjectId: createdSubject.id,
        questionId: questionId,
      })
      SubjectAdditional.bulkCreate(arrCheckedOption)

      res.status(200).json({
        status: 200,
        message: 'Subject was create successfully',
      })
    } catch (e) {
      console.error(e)
      res.status(403).json({
        status: 403,
        message: 'Some wrong with server. Please try later',
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}
