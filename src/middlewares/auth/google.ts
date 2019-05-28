import passport from 'passport'
import GooglePlusTokenStrategy from 'passport-google-plus-token'
import { AccountKind } from '../../app/User/components/Account'
import { UserModel, UserRepository, UserServices } from '../../app/User'

import authConfig from '../../config/auth'

passport.use(
  'googlePlusToken',
  new GooglePlusTokenStrategy(
    {
      clientID: authConfig.google.clientId,
      clientSecret: authConfig.google.clientSecret,
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) : Promise<void> => {
      try {
        const repository = new UserRepository({ model: UserModel })
        const getUserByAccountKindAndUIDService = new UserServices.GetUserByAccountKindAndUID({ repository })
        const user = await getUserByAccountKindAndUIDService.execute({ kind: AccountKind.Google, uid: profile.id })
        const existingUser = await User.findOne({
          'accounts.kind': AccountKind.Google,
          'accounts.uid': profile.id
        }).select('+accounts.password')

        if (existingUser) {
          return done(null, existingUser)
        }

        const userWithAddedAccount = await addNewAccountToUserIfEmailIsAlreadyRegistered(
          profile
        )
        if (userWithAddedAccount) return done(null, userWithAddedAccount)

        console.log('proceding to create new user')

        const newUser = await createNewUser(profile)

        done(null, newUser)
      } catch (error) {
        done(error, false, error.message)
      }

      async function createNewUser (profile) {
        const email = profile.emails[0].value
        const account = {
          kind: AccountKind.GOOGLE,
          uid: profile.id,
          email
        }

        return User.create({
          name: profile.displayName,
          email,
          accounts: [account]
        })
      }

      async function addNewAccountToUserIfEmailIsAlreadyRegistered (profile) {
        const email = profile.emails[0].value
        const existingUser = await User.findOne({
          'accounts.kind': AccountKind.LOCAL,
          'accounts.email': email
        })

        if (existingUser) {
          console.log('adding account to existing user')
          existingUser.accounts.push({
            kind: AccountKind.GOOGLE,
            uid: profile.id,
            email
          })

          await existingUser.save()

          return existingUser
        }
      }
    }
  )
)
