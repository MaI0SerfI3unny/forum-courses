const Sequilize = require('sequelize')
const db = require('@/services/db')

const ToolCourse = db.define(
  'tool_course',
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
      defaultValue: '-',
    },
    name: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: '-',
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'tool_courses',
  }
)

module.exports = ToolCourse
