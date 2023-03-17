const Sequilize = require('sequelize')
const db = require('@/services/db')
const ToolCourse = require('@/models/ToolCourse')
const ContentCourse = require('@/models/ContentCourse')
const { jsonParser } = require('@/middleware/helpers')

const AdditionalInfoCourse = db.define(
  'additional_info_course',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    description: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: '-',
    },
    language: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: '-',
    },
    time: {
      type: Sequilize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    typeLesson: {
      type: Sequilize.JSON,
      allowNull: false,
      get() {
        const value = this.getDataValue('typeLesson')
        if (!value) {
          return {}
        }
        return jsonParser(value)
      },
      defaultValue: [],
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'additional_info_courses',
  }
)

// Associate to Tool
AdditionalInfoCourse.belongsToMany(ToolCourse, {
  through: 'tool_additionalInfo',
})
ToolCourse.belongsToMany(AdditionalInfoCourse, {
  through: 'tool_additionalInfo',
})

// ContentCourse
AdditionalInfoCourse.hasOne(ContentCourse)
ContentCourse.belongsTo(AdditionalInfoCourse)

module.exports = AdditionalInfoCourse
