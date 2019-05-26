import express from 'express'
import ToolController from './controller'

class ToolRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.get('/', ToolController.index)
    router.post('/', ToolController.store)
    router.delete('/:id', ToolController.destroy)

    return router
  }
}

export default new ToolRoutes()
