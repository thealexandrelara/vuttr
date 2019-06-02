
import Database from '../../../../../__tests__/utils/database'
import { UserRepository, UserModel } from '../../../User'
import { GetUserByAccountKindAndUID, CreateUserAccount } from '../../services'
import { AccountKind } from '../../components/Account'

describe('User', () : void => {
  describe('services', () : void => {
    describe('GetUserByAccountKindAndUID', () : void => {
      beforeAll(async () : Promise<void> => {
        await Database.connect()
      })

      afterAll(async () : Promise<void> => {
        await Database.disconnect()
      })

      it('should not get a user if it does not exist', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const getUserByAccountKindAndUIDService = new GetUserByAccountKindAndUID({ repository: repository })
        const user = await getUserByAccountKindAndUIDService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev' }, { selectPassword: false })

        expect(user).toBeNull()
      })

      it('should get a user that exists', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const createUserAccountService = new CreateUserAccount({ repository: repository })
        await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev', email: 'alexandre@reakt.dev', password: '123456' })

        const getUserByAccountKindAndUIDService = new GetUserByAccountKindAndUID({ repository: repository })
        const user = await getUserByAccountKindAndUIDService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev' }, { selectPassword: false })

        expect(user).toBeTruthy()
      })
    })
  })
})
