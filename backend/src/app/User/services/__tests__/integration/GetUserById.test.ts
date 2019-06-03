
import Database from '../integration/../../../../../../__tests__/utils/database'
import { UserRepository, UserModel } from '../../..'
import { CreateUserAccount, GetUserById } from '../..'
import { AccountKind } from '../../../components/Account'

describe('User', () : void => {
  describe('services', () : void => {
    describe('GetUserById', () : void => {
      beforeAll(async () : Promise<void> => {
        await Database.connect()
      })

      afterEach(async () : Promise<void> => {
        await Database.clearDB()
      })

      afterAll(async () : Promise<void> => {
        await Database.disconnect()
      })

      it('should get a user that exists', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const createUserAccountService = new CreateUserAccount({ repository: repository })
        const createdUser = await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev', email: 'alexandre@reakt.dev', password: '123456' })

        const getUserByIdService = new GetUserById({ repository: repository })
        const user = await getUserByIdService.execute(createdUser.id)

        expect(user).toBeTruthy()
      })
    })
  })
})
