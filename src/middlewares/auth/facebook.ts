import passport from 'passport'
import FacebookTokenStragegy from 'passport-facebook-token'
import { AccountKind } from '../../app/User/components/Account'
import { UserModel, UserRepository, UserServices } from '../../app/User'

import authConfig from '../../config/auth'

passport.use(
  'facebookToken',
  new FacebookTokenStragegy(
    {
      clientID: authConfig.facebook.clientId,
      clientSecret: authConfig.facebook.clientSecret,
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) : Promise<void> => {
      try {
        const repository = new UserRepository({ model: UserModel })
        const createUserAccountService = new UserServices.CreateUserAccount({ repository })
        const name = extractUserName(profile)
        const user = await createUserAccountService.execute({ kind: AccountKind.Facebook, email: profile.emails[0].value, uid: profile.id, ...name })

        done(null, user)
      } catch (error) {
        done(error, false, error.message)
      }

      function extractUserName (profile) : { firstName: string, lastName: string} {
        const userName = profile.name.split(' ')
        const { given_name: givenName, family_name: familyName } = profile.name || { given_name: undefined, family_name: undefined }
        const name = { firstName: givenName || userName[0], lastName: familyName || userName[userName.length - 1] }

        return name
      }
    }
  )
)
