const Sequilize = require('sequelize')
const db = require('@/services/db')
const User = require('@/models/User')
const LikeComment = require('@/models/LikeComment')
const CommentReply = require('@/models/CommentReply')

const Comment = db.define(
  'comment',
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
    title: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    message: {
      type: Sequilize.TEXT,
      allowNull: false,
      defaultValue: '',
    },
  },
  {
    timestamps: true,
    tableName: 'comments',
  }
)

// Associate to Comment
Comment.belongsToMany(Comment, {
  through: CommentReply,
  as: 'reply',
  foreignKey: 'general_id',
})
Comment.belongsToMany(Comment, {
  through: CommentReply,
  as: 'general',
  foreignKey: 'reply_id',
})

// Associate to User
User.hasMany(Comment)
Comment.belongsTo(User)

// Associate to Like
Comment.hasMany(LikeComment)
LikeComment.belongsTo(Comment)

// Associate to Like
User.hasMany(LikeComment)
LikeComment.belongsTo(User)

module.exports = Comment
