const {
  Comment,
  Course,
  LikeComment,
  CommentReply,
  User,
} = require('@/models/')
const option = require('@/options')
const { Op } = require('sequelize')

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params
    const { user } = req
    if (!id) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }
    const findMess = await Comment.findByPk(id, { where: { userId: user.id } })
    if (!findMess) {
      return res
        .status(404)
        .json({ status: 404, message: 'Comment wasn`t founded' })
    }
    Comment.destroy({ where: { id: id, userId: user.id } })
    res
      .status(200)
      .json({ status: 200, message: 'Comment was success deleted' })
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const createReplyComment = async (req, res) => {
  try {
    const { commentId, message, title } = req.body
    const { user } = req
    if (!commentId || !message || !title) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findComment = await Comment.findByPk(commentId)
    if (!findComment) {
      return res
        .status(404)
        .json({ status: 404, message: 'Comment not founded' })
    }

    const createNewComment = await Comment.create({
      message,
      courseId: findComment.courseId,
      type: findComment.type,
      title,
      userId: user.id,
    })

    CommentReply.bulkCreate([
      { general_id: findComment.id, reply_id: createNewComment.id },
    ])
    res.status(200).json({ status: 200, message: 'Comment was publish' })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const arrReplyComm = []
    const findComment = await CommentReply.findAll({ attributes: ['reply_id'] })
    findComment.map((el) => arrReplyComm.push(el.reply_id))

    const getComm = await Comment.findAll({
      where: { id: { [Op.not]: arrReplyComm }, courseId: id },
      include: [
        { model: LikeComment, attributes: ['type'] },
        {
          model: Comment,
          as: 'reply',
          include: [
            { model: LikeComment, attributes: ['type'] },
            { model: User, attributes: ['avatar', 'name', 'id'] },
          ],
        },
        { model: User, attributes: ['avatar', 'name', 'id'] },
      ],
    })

    res.status(200).json({ status: 200, data: getComm })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const createComment = async (req, res) => {
  try {
    const { courseId, message, type, title } = req.body
    const { user } = req
    if (!courseId || !message || !type || !title) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findExistComment = await Course.findAll({ where: { id: courseId } })
    if (!findExistComment.length) {
      return res
        .status(404)
        .json({ status: 404, message: 'Course wasn`t founded' })
    }

    const findTypeComm = option.typeComment.filter((el) => el.name === type)
    if (!findTypeComm.length) {
      return res
        .status(403)
        .json({ status: 403, message: 'Type comment wasn`t founded' })
    }

    Comment.create({
      message,
      courseId,
      type,
      title,
      userId: user.id,
    })

    res.status(200).json({ status: 200, message: 'Comment was publish' })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const changeInfoComment = async (req, res) => {
  try {
    const { message, title, commentId } = req.body
    const { user } = req

    if (!message || !title || !commentId) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findComment = await Comment.findByPk(commentId, {
      where: {
        userId: user.id,
      },
    })

    if (!findComment) {
      return res
        .status(404)
        .json({ status: 404, message: 'Comment wasn`t founded' })
    }

    await Comment.update(
      { message, title },
      { where: { id: commentId, userId: user.id } }
    )

    res
      .status(200)
      .json({ status: 200, message: 'Comment was succussfully changed' })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const multipleCreateComment = async (req, res) => {
  try {
    const { cons = {}, pros = {}, exp = {}, courseId } = req.body
    const { user } = req

    const findExistComment = await Course.findAll({ where: { id: courseId } })
    if (!findExistComment.length) {
      return res
        .status(404)
        .json({ status: 404, message: 'Course wasn`t founded' })
    }

    if (!courseId) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    if (cons.message && cons.title) {
      await Comment.create({
        message: cons.message,
        courseId,
        type: 'cons',
        title: cons.title,
        userId: user.id,
      })
    }

    if (pros.message && pros.title) {
      await Comment.create({
        message: pros.message,
        courseId,
        type: 'pros',
        title: pros.title,
        userId: user.id,
      })
    }

    if (exp.message && exp.title) {
      await Comment.create({
        message: exp.message,
        courseId,
        type: 'exp',
        title: exp.title,
        userId: user.id,
      })
    }

    res.status(200).json({ status: 200, message: 'Comment was publish' })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const setLikeOrDislike = async (req, res) => {
  try {
    const { type, commentId } = req.body
    const { user } = req

    if (!type || !commentId || typeof commentId !== 'number') {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    const findTypeLike = option.typeLike.filter((el) => el.name === type)

    if (!findTypeLike.length) {
      return res
        .status(403)
        .json({
          status: 403,
          message: 'Type like wasn`t founded. Must `like` or `dislike`',
        })
    }

    const findComment = await Comment.findByPk(commentId)
    if (!findComment) {
      return res
        .status(404)
        .json({ status: 404, message: 'Comment wasn`t founded' })
    }

    const findExistLike = await LikeComment.findOne({
      where: { commentId, userId: user.id },
    })

    if (findExistLike) {
      await LikeComment.update(
        { type },
        { where: { commentId, userId: user.id } }
      )
    } else {
      await LikeComment.create({
        userId: user.id,
        commentId,
        type,
      })
    }
    res.status(200).json({ status: 200, message: 'Like was set for comment' })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

module.exports = {
  createComment,
  deleteMessage,
  setLikeOrDislike,
  multipleCreateComment,
  changeInfoComment,
  createReplyComment,
  getCommentById,
}
