import express from 'express'
import { ToolRoutes } from './app/Tool'

class AppRoutes {
  public setup (app: express.Application) : void{
    app.use('/tools', ToolRoutes.router)
  }
}

export default new AppRoutes()
