
import Database from '../integration/../../../../../../__tests__/utils/database'
import { UserRepository, UserModel } from '../../..'
import { GetAllUsers, CreateUserAccount } from '../..'
import { AccountKind } from '../../../components/Account'

describe('User', () : void => {
  describe('services', () : void => {
    describe('GetAllUsers', () : void => {
      beforeAll(async () : Promise<void> => {
        await Database.connect()
      })

      afterEach(async () : Promise<void> => {
        await Database.clearDB()
      })

      afterAll(async () : Promise<void> => {
        await Database.disconnect()
      })

      it('should get all created users from database', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const createUserAccountService = new CreateUserAccount({ repository: repository })
        await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev', email: 'alexandre@reakt.dev', password: '123456' })
        await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre2@reakt.dev', email: 'alexandre2@reakt.dev', password: '123456' })
        await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre3@reakt.dev', email: 'alexandre3@reakt.dev', password: '123456' })

        const getAllUsersService = new GetAllUsers({ repository: repository })
        const users = await getAllUsersService.execute()

        expect(users).toHaveLength(3)
      })

      it('should get empty array of users when no user was created', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const getAllUsersService = new GetAllUsers({ repository: repository })
        const users = await getAllUsersService.execute()

        expect(users).toHaveLength(0)
      })
    })
  })
})
