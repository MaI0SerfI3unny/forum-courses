const Users = require('../models/User')

exports.getUserSettings = async (req, res) => {
  try {
    const info = req.user.setting
    res.status(200).json({ status: 200, data: info })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.updateSettings = async (req, res) => {
  try {
    const { setting } = req.body
    const { user } = req
    if (!setting) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    if (
      typeof setting.commentsPush !== 'boolean' ||
      typeof setting.commentsEmail !== 'boolean' ||
      typeof setting.newAnswerPush !== 'boolean' ||
      typeof setting.newAnswerEmail !== 'boolean' ||
      typeof setting.systemPush !== 'boolean' ||
      typeof setting.systemEmail !== 'boolean'
    ) {
      return res
        .status(403)
        .json({ status: 403, message: 'Incorrect reading setting' })
    }

    Users.update(
      { setting: { notification: setting } },
      { where: { id: user.id } }
    )
      .then(() => {
        res.status(200).json({
          status: 200,
          message: 'Setting was successfully updated',
        })
      })
      .catch((err) => {
        console.error(err)
        res.status(403).json({
          status: 403,
          message: 'Some wrong with server. Please try later',
        })
      })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}
