import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Boom from '@hapi/boom'
import Youch from 'youch'
import celebrate from 'celebrate'
import swaggerUI from 'swagger-ui-express'

import databaseConfig from './config/database'
import AppRoutes from './routes'
import RepositoryError from './utils/RepositoryError'
import './middlewares/auth/jwt'
import './middlewares/auth/google'
import './middlewares/auth/facebook'
import './middlewares/auth/local'
import swaggerDocument from './swagger.json'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.setupMiddlewares()
    this.setupDatabase()
    this.setupRoutes()
    this.setupExceptionHandler()
  }

  private setupMiddlewares () : void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  }

  private setupDatabase () : void {
    mongoose.connect(`${databaseConfig.host}/${databaseConfig.database}`, {
      useNewUrlParser: true
    })
  }

  private setupRoutes () : void {
    AppRoutes.setup(this.express)
  }

  private setupExceptionHandler () : void {
    this.express.use(async (err, req, res, next) : Promise<express.Response> => {
      if (err instanceof RepositoryError) {
        return res.status(err.httpError.output.statusCode).json(err.httpError.output.payload)
      }
      if (celebrate.isCelebrate(err)) {
        return res.status(400).json(err)
      }
      if (err instanceof Boom) {
        return res.status(err.output.statusCode).json(err.output.payload)
      }
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)

        return res.status(400).json(await youch.toJSON())
      }

      return res.status(err.status || 500).json({ message: 'Internal server error' })
    })
  }
}

export default new App().express
