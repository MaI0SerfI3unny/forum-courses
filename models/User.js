const Sequilize = require('sequelize')
const db = require('@/services/db')
const { jsonParser } = require('@/middleware/helpers')

const User = db.define(
  'user',
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
    email: {
      type: Sequilize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    phone: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    methodReg:{
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: 'login', 
    },
    password: {
      type: Sequilize.TEXT,
      allowNull: false,
      defaultValue: '',
    },
    avatar: {
      type: Sequilize.TEXT,
      allowNull: false,
      defaultValue: '',
    },
    setting: {
      type: Sequilize.JSON,
      allowNull: false,
      get() {
        const setting = this.getDataValue('setting')
        if (!setting) {
          return {}
        }
        return jsonParser(setting)
      },
      defaultValue: {
        notification: {
          commentsPush: false,
          commentsEmail: false,
          newAnswerPush: false,
          newAnswerEmail: false,
          systemPush: false,
          systemEmail: false,
        },
      },
    },
  },
  {
    timestamps: false,
    tableName: 'user',
    createdAt: false,
    updatedAt: false,
  }
)

module.exports = User
