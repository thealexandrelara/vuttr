import request from 'supertest'
import mongoose from 'mongoose'
import { factory } from '../factories'
import faker from 'faker'
import app from '../../app'
import Database from '../../../__tests__/utils/database'

import { AuthServices } from '../../app/Auth'

describe('Tools', () : void => {
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

    describe('GET /tools', () :void => {
      it('should not retrieve tools if not authenticated', async () : Promise<void> => {
        await request(app)
          .get('/tools')
          .expect(401)
      })

      it('should retrieve empty tools if no tool was created', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)

        const response = await request(app)
          .get('/tools')
          .set('Authorization', `Bearer ${userToken}`)
          .expect(200)

        expect(response.body).toHaveLength(0)
      })

      it('should retrieve all created tools from the database', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)

        await factory.create('Tool', { user: user._id })
        await factory.create('Tool', { user: user._id })
        await factory.create('Tool', { user: user._id })
        const response = await request(app)
          .get('/tools')
          .set('Authorization', `Bearer ${userToken}`)
          .expect(200)

        expect(response.body).toHaveLength(3)
      })
    })

    describe('POST /tools', () : void => {
      it('should be able to create a tool if authenticated', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)
        const tool = { title: faker.company.companyName(), link: faker.internet.url(), description: faker.lorem.sentence(), tags: faker.random.words(3).split(' ') }

        const response = await request(app)
          .post('/tools')
          .send(tool)
          .set('Authorization', `Bearer ${userToken}`)
          .expect('Content-Type', /json/)
          .expect(201)

        expect(response.body._id).toBeTruthy()
      })

      it('should not create tool if not authenticated', async () : Promise<void> => {
        const tool = {
          title: faker.company.companyName(),
          link: faker.internet.url(),
          description: faker.lorem.sentence(),
          tags: faker.random.words(3).split(' ')
        }

        await request(app)
          .post('/tools')
          .send(tool)
          .expect(401)
      })

      it('should not create tool if missing tool title', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)
        const tool = {
          link: faker.internet.url(),
          description: faker.lorem.sentence(),
          tags: faker.random.words(3).split(' ')
        }

        await request(app)
          .post('/tools')
          .send(tool)
          .set('Authorization', `Bearer ${userToken}`)
          .expect('Content-Type', /json/)
          .expect(400)
      })

      it('should not create tool if missing tool link', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)
        const tool = {
          title: faker.company.companyName(),
          description: faker.lorem.sentence(),
          tags: faker.random.words(3).split(' ')
        }

        await request(app)
          .post('/tools')
          .send(tool)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(400)
      })

      it('should not create tool if missing tool description', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)
        const tool = {
          title: faker.company.companyName(),
          link: faker.internet.url(),
          tags: faker.random.words(3).split(' ')
        }

        await request(app)
          .post('/tools')
          .send(tool)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(400)
      })

      it('should not create tool if missing tool tags', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)
        const tool = {
          title: faker.company.companyName(),
          link: faker.internet.url(),
          description: faker.lorem.sentence()
        }

        await request(app)
          .post('/tools')
          .send(tool)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(400)
      })

      it('should create tool with user that created it', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)
        const tool = {
          title: faker.company.companyName(),
          link: faker.internet.url(),
          description: faker.lorem.sentence(),
          tags: faker.random.words(3).split(' ')
        }

        const response = await request(app)
          .post('/tools')
          .set('Authorization', `Bearer ${userToken}`)
          .send(tool)
          .expect(201)

        expect(response.body.user.toString()).toBe(user.id)
      })
    })

    describe('GET /tools/:id', () :void => {
      it('should not retrieve tools if not authenticated', async () : Promise<void> => {
        await request(app)
          .get('/tools/1')
          .expect(401)
      })

      it('should not retrieve tool if it does not exist', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)

        const response = await request(app)
          .get(`/tools/${mongoose.Types.ObjectId()}`)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(200)

        expect(response.body).toBeNull()
      })

      it('should retrieve tool from the database', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)

        const tool = await factory.create('Tool', { user: user._id })
        const response = await request(app)
          .get(`/tools/${tool.id}`)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(200)

        expect(response.body._id).toBe(tool.id)
      })

      it('should not allow a user that did not create the tool to view it', async () : Promise<void> => {
        const generateJwtToken = new AuthServices.GenerateJwtToken()

        const firstUser = await factory.create('User')
        const tool = await factory.create('Tool', { user: firstUser._id })

        const secondUser = await factory.create('User')
        const secondUserToken = await generateJwtToken.execute(secondUser)

        await request(app)
          .get(`/tools/${tool.id}`)
          .set('Authorization', `Bearer ${secondUserToken}`)
          .expect(403)
      })
    })

    describe('DELETE /tools/:id', () :void => {
      it('should not delete tool if not authenticated', async () : Promise<void> => {
        await request(app)
          .delete('/tools/1')
          .expect(401)
      })

      it('should delete tool if user is authenticated', async () : Promise<void> => {
        const user = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(user)

        const tool = await factory.create('Tool', { user: user.id.toString() })
        await request(app)
          .delete(`/tools/${tool.id}`)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(200)
      })

      it('should only allow the user that created the tool to delete it', async () : Promise<void> => {
        const user = await factory.create('User')
        const tool = await factory.create('Tool', { user: user.id.toString() })

        const otherUser = await factory.create('User')
        const generateJwtToken = new AuthServices.GenerateJwtToken()
        const userToken = await generateJwtToken.execute(otherUser)

        await request(app)
          .delete(`/tools/${tool.id}`)
          .set('Authorization', `Bearer ${userToken}`)
          .expect(403)
      })
    })
  })
})
