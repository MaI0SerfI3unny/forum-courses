const Sequilize = require('sequelize')
const db = require('@/services/db')
const User = require('@/models/User')
const Mark = require('@/models/Mark')
const Category = require('@/models/Category')
const Tag = require('@/models/Tag')
const Follower = require('@/models/Follower')
const Prerequisites = require('@/models/Prerequisites')
const SubjectAdditional = require('@/models/SubjectAdditional')
const LikeSubject = require('@/models/LikeSubject')

const Subject = db.define(
  'subject',
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
    title: {
      type: Sequilize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'subjects',
    createdAt: false,
    updatedAt: false,
  }
)

// Associate to User
User.hasOne(Subject)
Subject.belongsTo(User)

// Associate to Mark
Subject.hasMany(Mark)
Mark.belongsTo(Subject)

// Associate to Like
Subject.hasMany(LikeSubject)
LikeSubject.belongsTo(Subject)

// Associate to Like
User.hasMany(LikeSubject)
LikeSubject.belongsTo(User)

// Associate to Category
Category.hasMany(Subject)
Subject.belongsTo(Category)

// Associate to Tags
Subject.belongsToMany(Tag, {
  through: 'subjects_tags',
})
Tag.belongsToMany(Subject, {
  through: 'subjects_tags',
})

// Associate to Subject
Subject.belongsToMany(Subject, {
  through: SubjectAdditional,
  as: 'specific',
  foreignKey: 'specific_id',
})
Subject.belongsToMany(Subject, {
  through: SubjectAdditional,
  as: 'general',
  foreignKey: 'general_id',
})

// Associate to Prerequisites
Subject.belongsToMany(Prerequisites, {
  through: 'subjects_prerequisites',
})
Prerequisites.belongsToMany(Subject, {
  through: 'subjects_prerequisites',
})

// Associate to User Followers
Subject.hasMany(Follower)
Follower.belongsTo(Subject)

module.exports = Subject
