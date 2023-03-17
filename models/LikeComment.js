const Sequilize = require('sequelize')
const db = require('@/services/db')

const LikeComment = db.define(
  'like_comment',
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
    tableName: 'like_comments',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = LikeComment
