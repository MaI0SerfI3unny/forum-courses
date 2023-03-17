const Sequilize = require('sequelize')
const db = require('@/services/db')

const Category = db.define(
  'category',
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
    createdAt: false,
    updatedAt: false,
    tableName: 'categories',
  }
)

module.exports = Category
