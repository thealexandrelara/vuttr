import express from 'express'
import { ToolRoutes } from './app/Tool'
import { UserRoutes } from './app/User'

class AppRoutes {
  public setup (app: express.Application) : void{
    app.use('/tools', ToolRoutes.router)
    app.use('/users', UserRoutes.router)
  }
}

export default new AppRoutes()
