const Sequilize = require('sequelize')
const db = require('@/services/db')

const Mark = db.define(
  'mark',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    value: {
      type: Sequilize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequilize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'marks',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = Mark
