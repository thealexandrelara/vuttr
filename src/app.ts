import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Boom from '@hapi/boom'
import Youch from 'youch'
import celebrate from 'celebrate'

import AppRoutes from './routes'

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
  }

  private setupDatabase () : void {
    mongoose.connect('mongodb://database/tsnode', {
      useNewUrlParser: true
    })
  }

  private setupRoutes () : void {
    AppRoutes.setup(this.express)
  }

  private setupExceptionHandler () : void {
    this.express.use(async (err, req, res, next) : Promise<express.Response> => {
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

      return res.status(err.status || 500).json({ message: 'Erro interno do servidor' })
    })
  }
}

export default new App().express
