const bcrypt = require('bcryptjs')
const signToken = require('@/middleware/signToken')
const validateEmail = require('@/middleware/validate/validateEmail')
const User = require('@/models/User')

exports.createNewAvatar = async (req, res) => {
  try {
    const { user } = req
    User.update(
      { avatar: process.env.DOMAIN_URL_APP + req.file.path },
      { where: { id: user.id } }
    )
      .then(() => {
        res.status(200).json({
          data: 200,
          message: 'Avatar was successfully change',
        })
      })
      .catch((err) => {
        console.log(err)
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

exports.updateUserInfo = async (req, res) => {
  try {
    const { email, phone, name, country } = req.body
    const { user } = req
    const newInfo = {}
    if (!email && !phone && !name && !country) {
      return res.status(403).json({
        status: 403,
        message: 'No one params is required. But you must gived me something',
      })
    }

    if (email && !validateEmail(email)) {
      return res.status(403).json({
        status: 403,
        message: 'Email failed validation',
      })
    }

    if (email) {
      newInfo.email = email
    }
    if (phone) {
      newInfo.phone = phone
    }
    if (name) {
      newInfo.name = name
    }
    if (country) {
      newInfo.country = country
    }

    User.update(newInfo, { where: { id: user.id } })
      .then(() => {
        res.status(200).json({
          data: 200,
          message: 'Information user was successfully changed',
        })
      })
      .catch(() => {
        res.status(403).json({
          status: 403,
          message: 'Some wrong with server. Please try later',
        })
      })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.LoginController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }
    const user = await User.findOne({ where: { email, methodReg: "login" } })
    if (!user) {
      return res.status(403).json({ status: 404, message: 'User not exist' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ status: 404, message: 'User not exist' })
    }

    const token = signToken(email, user.id)
    res.status(200).json({
      status: 200,
      message: 'Login was successfully',
      data: token,
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.changePassword = async (req, res) => {
  const { currentPass, newPass, repeatNewPass } = req.body
  try {
    if (!currentPass || !newPass || !repeatNewPass) {
      return res.status(403).json({
        status: 403,
        message: 'No required parameters',
      })
    }
    if (newPass !== repeatNewPass) {
      return res.status(401).json({
        status: 401,
        message: 'New password does`t match',
      })
    }

    const isMatch = await bcrypt.compare(currentPass, req.user.password)
    if (!isMatch) {
      return res.status(404).json({
        status: 404,
        message: 'User not found by this password',
      })
    }
    const newPassHash = await bcrypt.hash(newPass, 12)
    User.update({ password: newPassHash }, { where: { id: req.user.id } })
      .then(() => {
        res.status(200).json({
          status: 200,
          message: 'Password was succesfully changed',
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
    console.log(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.getUser = async (req, res) => {
  try {
    const { user } = req
    res.status(200).json({ status: 200, data: user })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.GetUserInfo = async (req, res) => {
  try {
    const info = req.user
    let user = {
      id: info.id,
      name: info.name,
      email: info.email,
      phone: info.phone,
      country: info.country,
      avatar: info.avatar,
    }
    res.status(200).json({ status: 200, data: user })
  } catch (e) {
    console.error(e)
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.RegisterController = async (req, res) => {
  try {
    const { email, password, name, repeatPassword, country, phone } = req.body
    if (!email || !password || !name || !repeatPassword) {
      return res
        .status(403)
        .json({ status: 403, message: 'No required parameters' })
    }

    if (password !== repeatPassword) {
      return res
        .status(401)
        .json({ status: 403, message: 'Password does not match' })
    }
    const user = await User.findAll({ where: { email: email } })
    if (user.length !== 0) {
      return res.status(403).json({
        status: 403,
        message: 'User already exist by this email',
      })
    }
    const result = await User.create({
      email,
      password: await bcrypt.hash(password, 12),
      name,
      phone,
      country,
      avatar: ''
    })
    if (result) {
      res.status(200).json({
        status: 200,
        message: 'User has been created',
      })
    }
  } catch (error) {
    console.error(error)
    res.status(403).json({
      status: 403,
      message: 'Some wrong with server. Please try later',
    })
  }
}

exports.RegisterBySocialController = ({user}, res) => {
    const token = signToken(user.email, user.id)
    res.redirect(process.env.LINK_TO_REDIRECT +"?token="+token)
}