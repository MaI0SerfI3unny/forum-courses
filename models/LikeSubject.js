const Sequilize = require('sequelize')
const db = require('@/services/db')

const LikeSubject = db.define(
  'like_subject',
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
    tableName: 'like_subjects',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = LikeSubject
