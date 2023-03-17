const Sequilize = require('sequelize')
const db = require('@/services/db')
const User = require('@/models/User')

const Notification = db.define(
  'notification',
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
      defaultValue: '',
    },
    message: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    specialId: {
      type: Sequilize.INTEGER,
      allowNull: true,
    },
    userIdCreator: {
      type: Sequilize.INTEGER,
      allowNull: true,
    },
    typeRead:{
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: "created",
    },
    typeReadBool: {
      type: Sequilize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    tableName: 'notifications',
    createdAt: false,
    updatedAt: false,
  }
)

// Associate to User
User.hasMany(Notification)
Notification.belongsTo(User)

module.exports = Notification
