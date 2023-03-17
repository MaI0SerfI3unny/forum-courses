const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require('@/models/User')

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (payload, done) => {
      try {
        const user = await User.findOne({
          where: { id: payload.id },
        })
        if (!user) {
          return done(null, false)
        }
        return done(null, user)
      } catch (e) {
        return done(e, false)
      }
    }
  )
)

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `${process.env.DOMAIN_URL_APP}api/auth/google/callback`,
    passReqToCallback : true
    },
  async (_request, _accessToken, _refreshToken, profile, done) => {
    try {
      const user = await User.findOrCreate({
      where: { email: profile.email, methodReg: "google" },
      defaults:{
        name: profile.given_name,
        country: profile.language,
        avatar: profile.photos[0].value
      }
    });
    return done(null, user[0]);
    } catch (error) {
      return done(error, false)
    }}
  )
)

const withAuth = passport.authenticate('jwt', { session: false })

module.exports = { withAuth, passport }
