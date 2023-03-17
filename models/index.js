const Question = require('@/models/Question')
const User = require('@/models/User')
const Subject = require('@/models/Subject')
const Category = require('@/models/Category')
const Tag = require('@/models/Tag')
const Mark = require('@/models/Mark')
const Follower = require('@/models/Follower')
const Course = require('@/models/Course')
const GalleryCourse = require('@/models/GalleryCourse')
const AdditionalInfoCourse = require('@/models/AdditionalInfoCourse')
const ResourceCourse = require('@/models/ResourceCourse')
const ToolCourse = require('@/models/ToolCourse')
const Comment = require('@/models/Comment')
const Prerequisites = require('@/models/Prerequisites')
const LikeSubject = require('@/models/LikeSubject')
const LikeComment = require('@/models/LikeComment')
const CommentReply = require('@/models/CommentReply')
const Notification = require('@/models/Notification')
const QuestionSubjects = require('@/models/QuestionSubjects')
const SubjectAdditional = require('@/models/SubjectAdditional')
const ContentCourse = require('@/models/ContentCourse')
const LikeCourse = require('@/models/LikeCourse')
const FollowerCourse = require("@/models/FollowerCourse")

module.exports = {
  User,
  Question,
  Subject,
  Category,
  Tag,
  Mark,
  Course,
  ContentCourse,
  GalleryCourse,
  AdditionalInfoCourse,
  ResourceCourse,
  ToolCourse,
  Comment,
  Prerequisites,
  LikeSubject,
  LikeComment,
  CommentReply,
  Notification,
  QuestionSubjects,
  SubjectAdditional,
  LikeCourse,
  Follower,
  FollowerCourse
}
