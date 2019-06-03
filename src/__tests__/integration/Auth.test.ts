import request from 'supertest'
import { factory } from 'factory-girl'
import app from '../../app'
import Database from '../../../__tests__/utils/database'

import { UserRepository, UserModel, UserServices } from '../../app/User'
import { AccountKind } from '../../app/User/components/Account'

import { AuthServices } from '../../app/Auth'

describe('Authentication', () : void => {
  describe('endpoints', () : void => {
    beforeAll(async () : Promise<void> => {
      await Database.connect()
    })

    afterEach(async () : Promise<void> => {
      await Database.clearDB()
    })

    afterAll(async () : Promise<void> => {
      await Database.disconnect()
    })

    it('should be able to authenticate with valid credentials', async () : Promise<void> => {
      const repository = new UserRepository({ model: UserModel })
      const createUserAccountService = new UserServices.CreateUserAccount({ repository: repository })
      await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev', email: 'alexandre@reakt.dev', password: '123456' })

      const response = await request(app)
        .post('/auth/local')
        .send({ email: 'alexandre@reakt.dev', password: '123456' })

      expect(response.body).toHaveProperty('token')
    })

    it('should not be able to authenticate with invalid credentials', async () : Promise<void> => {
      const repository = new UserRepository({ model: UserModel })
      const createUserAccountService = new UserServices.CreateUserAccount({ repository: repository })
      await createUserAccountService.execute({ kind: AccountKind.Local, uid: 'alexandre@reakt.dev', email: 'alexandre@reakt.dev', password: '123456' })

      const response = await request(app)
        .post('/auth/local')
        .send({ email: 'alexandre@reakt.dev', password: 'abc' })

      expect(response.status).toBe(401)
    })
  })
})
