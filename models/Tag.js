const Sequilize = require('sequelize')
const db = require('@/services/db')

const Tag = db.define(
  'tag',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequilize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'tags',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = Tag
