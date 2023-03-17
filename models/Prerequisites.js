const Sequilize = require('sequelize')
const db = require('@/services/db')

const Prerequisites = db.define(
  'prerequisite',
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
    indexes: [
      {
        unique: true,
        fields: ['name'],
      },
    ],
    tableName: 'prerequisites',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = Prerequisites
