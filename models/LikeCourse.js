const Sequilize = require('sequelize')
const db = require('@/services/db')

const LikeCourse = db.define(
  'like_courses',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: Sequilize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'like_courses',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = LikeCourse
