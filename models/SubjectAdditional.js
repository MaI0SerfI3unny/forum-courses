const Sequilize = require('sequelize')
const db = require('@/services/db')
const Subject = require('@/models/Subject')

const SubjectAdditional = db.define(
  'subjects_additional',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    specific_id: {
      type: Sequilize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Subject,
        key: 'id',
      },
    },
    general_id: {
      type: Sequilize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Subject,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'subjects_additional',
  }
)

module.exports = SubjectAdditional
