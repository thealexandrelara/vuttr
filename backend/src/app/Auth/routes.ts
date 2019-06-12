import express from 'express'
import handle from 'express-async-handler'
import { celebrate } from 'celebrate'
import AuthController from './controller'
import authMiddleware from '../../middlewares/auth'
import validator from './validators'

class AuthRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.post('/local', celebrate(validator.signIn), authMiddleware.local, handle(AuthController.localSignIn))
    // router.post('/', celebrate(validator.store), handle(ToolController.store))
    // router.get('/:id', celebrate(validator.show), handle(ToolController.show))
    // router.delete('/:id', handle(ToolController.destroy))

    return router
  }
}

export default new AuthRoutes()
