const Sequilize = require('sequelize')
const db = require('@/services/db')

const SubjectPhoto = db.define(
  'subject_photo_url',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    url: {
      type: Sequilize.JSON,
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    timestamps: false,
    tableName: 'subject_photo_urls',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = SubjectPhoto
