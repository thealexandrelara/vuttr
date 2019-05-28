import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import authConfig from '../../config/auth'
import { AccountKind } from '../../app/User/components/Account'
import { UserServices, UserRepository, UserModel, UserDocument } from '../../app/User'

passport.use(new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Bearer'),
    secretOrKey: authConfig.secret,
    passReqToCallback: true
  },
  async (req, payload, done) : Promise<void> => {
    try {
      const repository = new UserRepository({ model: UserModel })
      const getUserByIdService = new UserServices.GetUserById({ repository, options: { select: '-_id -createdAt -updatedAt -__v' } })
      const user = await getUserByIdAndOmitUnnecessaryFields(payload.sub)

      if (!user) {
        return done(null, false)
      }

      req.userId = payload.sub

      done(null, user)
    } catch (error) {
      done(error, false)
    }

    async function getUserByIdAndOmitUnnecessaryFields (userId) {
      return User.findById(userId).select('-_id -createdAt -updatedAt -__v')
    }
  }
))
