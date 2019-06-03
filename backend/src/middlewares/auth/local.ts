import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { AccountKind } from '../../app/User/components/Account'
import { UserServices, UserRepository, UserModel, UserDocument } from '../../app/User'

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) : Promise<void> => {
  try {
    const repository = new UserRepository({ model: UserModel })
    const getUserByAccountKindAndUIDService = new UserServices.GetUserByAccountKindAndUID({ repository })
    const user = await getUserByAccountKindAndUIDService.execute({ kind: AccountKind.Local, uid: email }, { selectPassword: true })

    if (!user) return done(null, false)
    const isCorrectPassword = await checkIfUserPasswordIsCorrect(
      user,
      password
    )
    if (!isCorrectPassword) return done(null, false)

    done(null, user)
  } catch (error) {
    done(error, false)
  }

  async function checkIfUserPasswordIsCorrect (user : UserDocument, password : string) : boolean {
    return user.comparePassword(password)
  }
}))
