import passport from 'passport'

const passportLocal = passport.authenticate('local', { session: false })
const passportGoogle = passport.authenticate('googlePlusToken', {
  session: false
})
const passportFacebook = passport.authenticate('facebookToken', {
  session: false
})
const passportJwt = passport.authenticate('jwt', {
  session: false
})

export default {
  local: passportLocal,
  google: passportGoogle,
  facebook: passportFacebook,
  jwt: passportJwt
}
