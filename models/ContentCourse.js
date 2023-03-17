const Sequilize = require('sequelize')
const db = require('@/services/db')
const { jsonParser } = require('@/middleware/helpers')

const ContentCourse = db.define(
  'content_course',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    value: {
        type: Sequilize.JSON,
        allowNull: false,
        get() {
            const value = this.getDataValue('value')
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
    tableName: 'content_course',
  }
)

module.exports = ContentCourse
