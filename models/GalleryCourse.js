const Sequilize = require('sequelize')
const db = require('@/services/db')

const GalleryCourse = db.define(
  'gallery_course',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    url: {
      type: Sequilize.TEXT,
      allowNull: false,
      defaultValue: '',
    },
  },
  {
    timestamps: false,
    tableName: 'gallery_course',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = GalleryCourse
