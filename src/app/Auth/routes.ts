import express from 'express'
import handle from 'express-async-handler'
import AuthController from './controller'
import authMiddleware from '../../middlewares/auth'

class AuthRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.post('/local', authMiddleware.local, handle(AuthController.localSignIn))
    // router.post('/', celebrate(validator.store), handle(ToolController.store))
    // router.get('/:id', celebrate(validator.show), handle(ToolController.show))
    // router.delete('/:id', handle(ToolController.destroy))

    return router
  }
}

export default new AuthRoutes()
