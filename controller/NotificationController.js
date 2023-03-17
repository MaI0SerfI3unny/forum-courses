const Notification = require('@/models/Notification')

const getCountUnreadNotification = async (req, res) => {
  try {
    const { user } = req
    const findNotification = await Notification.count({
      where: { userId: user.id, typeRead: false },
    })
    res.status(200).json({ status: 200, result: findNotification })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

const getMyNotification = async (req, res) => {
  try {
    const { user } = req
    await Notification.update(
      { typeReadBool: true, typeRead: "reads" },
      { where: { userId: user.id, typeRead: "watched" } }
    )

    await Notification.update(
      { typeRead: "watched" },
      { where: { userId: user.id, typeRead: "created" } }
    )

    const findNotification = await Notification.findAll({
      where: { userId: user.id },
      order: [
        ["id", "DESC"]
      ],
    })
    res.status(200).json({ status: 200, data: findNotification })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

module.exports = { getMyNotification, getCountUnreadNotification }
