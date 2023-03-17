const Notification = require('@/models/Notification')
const transporter = require('@/services/mailer/mailer')
const { jsonParser } = require('@/middleware/helpers')

const createNotification = async (info) => {
  await Notification.create({
    type: info.type,
    message: info.message,
    specialId: info.specialId,
    userId: info.userId,
    userIdCreator: info.userIdCreator
  })
}

const sendMails = (sendTo, title, message) => {
  const mailOptions = {
    from: 'askhow@gmail.com',
    to: sendTo,
    subject: title,
    text: message,
  }
  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log(err)
    }
  })
}

const middlewareNotification = async (res) => {
  const { infoObj, subjectId, questionId, userId, courseId } = res 
  const settingUser = jsonParser(infoObj.findUserTaker.setting)
  if (
    settingUser.notification.commentsPush ||
    settingUser.notification.newAnswerPush
  ){
    createNotification({
      type:
        questionId !== undefined && subjectId !== undefined
          ? 'answer'
          : 'comment',
      message: infoObj.message,
      specialId:
        questionId !== undefined && subjectId !== undefined
          ? questionId
          : courseId,
      userId: infoObj.findUserTaker.id,
      userIdCreator:
        questionId !== undefined && subjectId !== undefined
          ? userId
          : infoObj.findUserCreator.id,
    })
  }
  if (
    settingUser.notification.commentsEmail ||
    settingUser.notification.newAnswerEmail
  ) {
    sendMails(infoObj.findUserTaker.email, infoObj.message, infoObj.text)
  }
}

module.exports = { middlewareNotification }
