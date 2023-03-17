const Sequilize = require('sequelize')
const db = require('@/services/db')
const Category = require('@/models/Category')
const User = require('@/models/User')
const Tag = require('@/models/Tag')
const Subject = require('@/models/Subject')
const QuestionSubjects = require('@/models/QuestionSubjects')
const Comment = require('@/models/Comment')
const Course = require('@/models/Course')
const { middlewareNotification } = require('@/middleware/mail/mail')
const i18next = require('i18next')

const Question = db.define(
  'question',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequilize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequilize.TEXT,
      defaultValue: '',
    },
  },
  {
    tableName: 'questions',
    createdAt: false,
    updatedAt: false,
  }
)

QuestionSubjects.addHook('afterCreate', async (res) => {
  const { questionId, subjectId } = res
  const findUserTakerInfo = await Question.findByPk(questionId)
  const findUserTaker = await User.findByPk(findUserTakerInfo.userId)
  const findUserCreatorSubject = await Subject.findByPk(subjectId)
  const findUserCreator = await User.findByPk(findUserCreatorSubject.userId)
  const message = i18next.t('hoverEmailAnswer', {
    userCreator: findUserCreator.email,
    titleQuesstion: findUserTakerInfo.title,
  })
  const text = i18next.t('textEmailAnswer', {
    userCreator: findUserCreator.email,
    titleQuesstion: findUserTakerInfo.title,
  })
  middlewareNotification({
    questionId,
    subjectId,
    infoObj: {
      message,
      text,
      findUserTakerInfo,
      findUserTaker,
      findUserCreatorSubject,
      findUserCreator,
    },
  })
})

Comment.addHook('afterCreate', async (res) => {
  const { courseId, userId } = res
  const findUserTakerInfo = await Course.findByPk(courseId)
  const findUserTaker = await User.findByPk(findUserTakerInfo.userId)
  const findUserCreator = await User.findByPk(userId)
  const message = i18next.t('hoverEmailComment', {
    userCreator: findUserCreator.email,
    titleCourse: findUserTakerInfo.name,
  })
  const text = i18next.t('textEmailComment', {
    userCreator: findUserCreator.email,
    titleCourse: findUserTakerInfo.name,
  })
  middlewareNotification({
    courseId,
    userId,
    infoObj: {
      message,
      text,
      findUserTakerInfo,
      findUserTaker,
      findUserCreator,
    },
  })
})

// Associate to Category
Category.hasMany(Question)
Question.belongsTo(Category)

// Associate to User
User.hasMany(Question)
Question.belongsTo(User)

// Associate to Tags
Question.belongsToMany(Tag, {
  through: 'questions_tags',
})
Tag.belongsToMany(Question, {
  through: 'questions_tags',
})

// // Associate to Subjects
Question.belongsToMany(Subject, {
  through: QuestionSubjects,
})
Subject.belongsToMany(Question, {
  through: QuestionSubjects,
})

module.exports = Question
