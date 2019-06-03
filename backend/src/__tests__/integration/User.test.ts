import request from 'supertest'
import faker from 'faker'
import app from '../../app'
import Database from '../../../__tests__/utils/database'

import { UserRepository, UserModel, UserServices } from '../../app/User'
import { AccountKind } from '../../app/User/components/Account'

import { AuthServices } from '../../app/Auth'

describe('User', () : void => {
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

    it('should be able to create user', async () : Promise<void> => {
      const response = await request(app)
        .post('/users')
        .send({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() })

      expect(response.body).toHaveProperty('token')
    })

    it('should not be able to create user without first name', async () : Promise<void> => {
      await request(app)
        .post('/users')
        .send({ lastName: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() })
        .expect(400)
    })

    it('should not be able to create user without last name', async () : Promise<void> => {
      await request(app)
        .post('/users')
        .send({ firstName: faker.name.firstName(), email: faker.internet.email(), password: faker.internet.password() })
        .expect(400)
    })

    it('should not be able to create user without e-mail', async () : Promise<void> => {
      await request(app)
        .post('/users')
        .send({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), password: faker.internet.password() })
        .expect(400)
    })

    it('should not be able to create user without password', async () : Promise<void> => {
      await request(app)
        .post('/users')
        .send({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email() })
        .expect(400)
    })
  })
})
