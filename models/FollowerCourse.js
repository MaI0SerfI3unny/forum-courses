const Sequilize = require('sequelize')
const db = require('@/services/db')

const FollowerCourse = db.define(
  'follower_courses',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: Sequilize.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: 'followers_courses',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = FollowerCourse
