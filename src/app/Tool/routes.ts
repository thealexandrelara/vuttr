import express from 'express'
import ToolController from './controller'
import { celebrate } from 'celebrate'
import validator from './validator'
import handle from 'express-async-handler'

class ToolRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.get('/', celebrate(validator.index), handle(ToolController.index))
    router.post('/', celebrate(validator.store), handle(ToolController.store))
    router.get('/:id', celebrate(validator.show), handle(ToolController.show))
    router.delete('/:id', handle(ToolController.destroy))

    return router
  }
}

export default new ToolRoutes()
