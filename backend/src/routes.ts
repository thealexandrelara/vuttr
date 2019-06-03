import express from 'express'
import { ToolRoutes } from './app/Tool'
import { UserRoutes } from './app/User'
import { AuthRoutes } from './app/Auth'

class AppRoutes {
  public setup (app: express.Application) : void{
    app.use('/auth', AuthRoutes.router)
    app.use('/tools', ToolRoutes.router)
    app.use('/users', UserRoutes.router)
  }
}

export default new AppRoutes()
