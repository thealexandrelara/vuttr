import express from 'express'
import ToolController from './controller'
import { celebrate } from 'celebrate'
import validator from './validator'

class ToolRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.get('/', ToolController.index)
    router.post('/', celebrate(validator.store), ToolController.store)
    router.delete('/:id', ToolController.destroy)

    return router
  }
}

export default new ToolRoutes()
