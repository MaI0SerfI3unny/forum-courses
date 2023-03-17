const db = require('@/services/db')
const QuestionSubjects = db.define(
  'questions_subjects',
  {},
  { timestamps: false }
)

module.exports = QuestionSubjects
