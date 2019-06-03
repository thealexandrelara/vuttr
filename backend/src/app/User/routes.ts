import express from 'express'
import handle from 'express-async-handler'
import { celebrate } from 'celebrate'
import validators from './validators'

import UserController from './controller'

class UserRoutes {
  public get router () : express.Router {
    const router = express.Router()

    router.get('/', handle(UserController.index))
    router.post('/', celebrate(validators.store), handle(UserController.store))

    return router
  }
}

export default new UserRoutes()
