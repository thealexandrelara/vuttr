import express from 'express'
import handle from 'express-async-handler'
import { celebrate } from 'celebrate'
import AuthController from './controller'
import authMiddleware from '../../middlewares/auth'
import validator from './validators'

class AuthRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.post('/local', celebrate(validator.signIn), authMiddleware.local, handle(AuthController.signIn))
    router.get('/google', celebrate(validator.oauthSignIn), authMiddleware.google, handle(AuthController.signIn))
    router.get('/facebook', celebrate(validator.oauthSignIn), authMiddleware.facebook, handle(AuthController.signIn))

    return router
  }
}

export default new AuthRoutes()
