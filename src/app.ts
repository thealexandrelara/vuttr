import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.setupMiddlewares()
    this.setupDatabase()
    this.setupRoutes()
  }

  private setupMiddlewares () : void {
    this.express.use(express.json())
  }

  private setupDatabase () : void {
    mongoose.connect('mongodb://database/tsnode', {
      useNewUrlParser: true
    })
  }

  private setupRoutes () : void {
    console.log('test')
  }
}

export default new App().express
