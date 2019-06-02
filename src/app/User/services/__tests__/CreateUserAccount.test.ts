import Database from '../../../../../__tests__/utils/database'
import { UserRepository, UserModel } from '../..'
import { AccountKind } from '../../components/Account'
import { CreateUserAccount } from '../index'
import RepositoryError from '../../../../utils/RepositoryError'

describe('User', () : void => {
  describe('services', () : void => {
    describe('CreateUserAccount', () : void => {
      beforeAll(async () : Promise<void> => {
        await Database.connect()
      })

      afterAll(async () : Promise<void> => {
        await Database.disconnect()
      })

      it('should be able to create local user account', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const createUserAccountService = new CreateUserAccount({ repository: repository })
        const user = await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev', email: 'alexandre@reakt.dev', password: '123456' })

        expect(user.email).toBe('alexandre@reakt.dev')
      })

      it('should throw error when no e-mail is provided while creating local user account', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const createUserAccountService = new CreateUserAccount({ repository: repository })

        await expect(createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev' })).rejects.toThrow(RepositoryError)
      })

      it('should throw error when no password is provided while creating local user account', async () : Promise<void> => {
        const repository = new UserRepository({ model: UserModel })
        const createUserAccountService = new CreateUserAccount({ repository: repository })

        await expect(createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev' })).rejects.toThrow(RepositoryError)
      })
    })
  })
})
