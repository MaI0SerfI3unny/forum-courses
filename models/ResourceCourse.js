const Sequilize = require('sequelize')
const db = require('@/services/db')

const ResourceCourse = db.define(
  'resource_course',
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
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'resource_courses',
  }
)

module.exports = ResourceCourse
