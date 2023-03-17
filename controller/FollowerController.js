const {
  Follower, Course, Prerequisites, GalleryCourse, 
  ResourceCourse, Subject, ToolCourse, Category, Mark, 
  LikeSubject, ContentCourse, AdditionalInfoCourse, LikeCourse,FollowerCourse
} = require('@/models/')

exports.getMyFollowersSubjects = async (req, res) => {
  try {
    const { page = '0', pageSize = '15' } = req.query
    const offset = parseInt(page) * parseInt(pageSize)
    const limit = parseInt(pageSize)
    const { user } = req

    const follow = await Follower.findAndCountAll({
      where: { userId: user.id },
      include: [
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
      data: follow,
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

exports.getMyFollowersCourse = async (req, res) => {
  try {
    const { page = '0', pageSize = '15' } = req.query
    const offset = parseInt(page) * parseInt(pageSize)
    const limit = parseInt(pageSize)
    const { user } = req

    const follow = await FollowerCourse.findAndCountAll({
      where: { userId: user.id },
      include: [{
        model: Course,
        include:[
          GalleryCourse,
          LikeCourse,
          {model: AdditionalInfoCourse, include: [
            ToolCourse,
            { model: ContentCourse, attributes: ['value'] }
          ]},
          {model:ResourceCourse,
              include: [{model: Subject, 
                  include: [
                      { model:Subject, as:"general" },
                      { model:Category, attributes: ['name'] }, 
                      { model:Mark, attributes: ['value'] },
                      { model:Prerequisites, attributes:['name'] },
                      { model:LikeSubject,attributes:['type'] },
                  ]}
              ]}
      ],
    }],
      offset: offset,
      limit: limit,
      distinct: true,
    })

    res.status(200).json({
      status: 200,
      data: follow,
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

exports.setFollowSubject = async (req, res) => {
  try {
    const { subjectId } = req.body
    const { user } = req

    if (!subjectId) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }
    const findSubject = await Subject.findAll({ where: { id: subjectId } })
    const findAlreadyFollow = await Follower.findAll({
      where: { userId: user.id, subjectId },
    })
    if (!findSubject) {
      return res
        .status(404)
        .json({ status: 403, message: 'Subject wasn`t find' })
    }

    if (!findAlreadyFollow.length) {
      await Follower.create({
        subjectId,
        userId: user.id,
      })
      res.status(200).json({
        status: 200,
        message: 'Subject was added in favorites',
      })
    } else {
      await Follower.destroy({
        where: { userId: user.id, subjectId },
      })
      res.status(200).json({
        status: 200,
        message: 'Subject was removed from favorites',
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

exports.setFollowCourse = async (req, res) => {
  try {
    const { courseId } = req.body
    const { user } = req

    if (!courseId) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }
    const findCourse = await Course.findAll({ where: { id: courseId } })
    const findAlreadyFollow = await FollowerCourse.findAll({
      where: { userId: user.id, courseId },
    })
    if (!findCourse) {
      return res
        .status(404)
        .json({ status: 403, message: 'Course wasn`t find' })
    }

    if (!findAlreadyFollow.length) {
      await FollowerCourse.create({
        courseId,
        userId: user.id,
      })
      res.status(200).json({
        status: 200,
        message: 'Course was added in favorites',
      })
    } else {
      await FollowerCourse.destroy({
        where: { userId: user.id, courseId },
      })
      res.status(200).json({
        status: 200,
        message: 'Course was removed from favorites',
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