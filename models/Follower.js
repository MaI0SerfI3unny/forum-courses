const Sequilize = require('sequelize')
const db = require('@/services/db')

const Follower = db.define(
  'follower',
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
    },
  },
  {
    tableName: 'followers',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = Follower
