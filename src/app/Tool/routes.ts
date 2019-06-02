import express from 'express'
import handle from 'express-async-handler'
import ToolController from './controller'
import { celebrate } from 'celebrate'
import validator from './validator'
import authMiddleware from '../../middlewares/auth'

class ToolRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.get('/', authMiddleware.jwt, celebrate(validator.index), handle(ToolController.index))
    router.post('/', authMiddleware.jwt, celebrate(validator.store), handle(ToolController.store))
    router.get('/:id', authMiddleware.jwt, celebrate(validator.show), handle(ToolController.show))
    router.delete('/:id', authMiddleware.jwt, handle(ToolController.destroy))

    return router
  }
}

export default new ToolRoutes()
