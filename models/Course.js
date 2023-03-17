const Sequilize = require('sequelize')
const db = require('@/services/db')
const User = require('@/models/User')
const CoursePhoto = require('@/models/GalleryCourse')
const AdditionalInfoCourse = require('@/models/AdditionalInfoCourse')
const ResourceCourse = require('@/models/ResourceCourse')
const Subject = require('@/models/Subject')
const Comment = require('@/models/Comment')
const LikeCourse = require('@/models/LikeCourse')
const FollowerCourse = require('@/models/FollowerCourse')

const Course = db.define(
  'course',
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
    name: {
      type: Sequilize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequilize.STRING,
      allowNull: false,
    },
    source:{
      type: Sequilize.STRING,
      allowNull: false,
    },
    course_photo_url:{
      type: Sequilize.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    payment: {
      type: Sequilize.STRING,
      allowNull: false,
      defaultValue: 'Free',
    },
    payment_price: {
      type: Sequilize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'courses',
  }
)

// Associate to User
User.hasOne(Course)
Course.belongsTo(User)

// Associate to ResourceCourse
Course.hasMany(ResourceCourse)
ResourceCourse.belongsTo(Course)

// Associate to Like
Course.hasMany(LikeCourse)
LikeCourse.belongsTo(Course)

// Associate to Like
User.hasMany(LikeCourse)
LikeCourse.belongsTo(User)

// Associate to Comment
Course.hasMany(Comment)
Comment.belongsTo(Course)

// Associate to Subject
Subject.hasMany(ResourceCourse)
ResourceCourse.belongsTo(Subject)

// Associate to Additional course
Course.hasOne(AdditionalInfoCourse)
AdditionalInfoCourse.belongsTo(Course)

// Associate to Course photo
Course.hasMany(CoursePhoto)
CoursePhoto.belongsTo(Course)

// Associate to User Followers
Course.hasMany(FollowerCourse)
FollowerCourse.belongsTo(Course)

module.exports = Course
