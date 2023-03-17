const Sequilize = require('sequelize')
const db = require('@/services/db')
const Comment = require('@/models/Comment')

const CommentReply = db.define(
  'comment_reply',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    reply_id: {
      type: Sequilize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Comment,
        key: 'id',
      },
    },
    general_id: {
      type: Sequilize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Comment,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'comment_reply',
  }
)

module.exports = CommentReply
